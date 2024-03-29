const express = require('express');
const router = express.Router();
const sql = require('../models/sqlCommands.js')
const { connection, Registry } = require('../config/db_config')
const { requireLogin, validateForms } = require('../helpers/middleware')
const { isAcuteChol } = require('../helpers/decisionTools')
const { getPatientData, local2registry, submitPatientToRegistry } = require('../helpers/moveReg.js');
const tableNames = require('../models/tableNames.js');




router.get('/:id/show', requireLogin, async (req, res) => {
    const { id } = req.params;
    const result = await sql.getjoinedData(connection, id);
    const data = result[0];

    let moduleCode = ''
    try { moduleCode = data.moduleid.slice(0, 3).toLowerCase() }
    catch { };
    const regResult = await sql.selectById(Registry, 'demographics', req.params.id)
    let inRegistry = Boolean(regResult.length);
    res.render('show', { data, inRegistry, req, moduleCode: moduleCode })
})


router.get('/:id/edit', requireLogin, async (req, res) => {

    // Get all the data that exists for patient [id]
    const { id } = req.params;
    let validate = req.query.val;
    const result = await sql.getjoinedData(connection, id);
    const data = result[0]
    // console.log(data)
    for (let dt in data) {
        if (!data[dt]) {
            delete data[dt];
        }
    }
    let jsonData = JSON.stringify(data)
    res.render('masterForm', { jsonData, validate, req })
})

router.post('/:id', requireLogin, validateForms, async (req, res) => {
    // A bit of preprocessing
    const data = req.body;
    // console.log(data)
    const { id } = req.params;
    if (Array.isArray(data.procedureid)) {
        data.procedureid = data.procedureid.join("");
    }

    // Add fields for blank checkboxes that would be otherwise unchecked
    let allFields = [];
    for (let table in tableNames.tables) {
        allFields = allFields.concat(tableNames.tables[table])
    }
    for (let table in tableNames.modules) {
        allFields = allFields.concat(tableNames.modules[table])
    }
    const difference = allFields.filter(value => !Object.keys(data).includes(value));

    for (let dt of difference) {
        data[dt] = '';
    }

    for (let dt in data) {
        if (Array.isArray(data[dt])) {
            data[dt] = data[dt].join('&')
        }
        if (data[dt] === '') {
            data[dt] = null;
        }
    }
    console.log('Update min dataset')
    for (let table of Object.keys(tableNames.tables)) {
        let filtered = tableNames.filterObj(data, tableNames.tables[table]);
        await sql.updateModules(connection, table, filtered, id)
    }
    console.log('Update module')

    if (data.moduleid) {
        // A module has been selected for the patient
        const moduleCode = data.moduleid.slice(0, 3).toLowerCase();
        // Retrieve data from the module table
        let result = await sql.selectById(connection, moduleCode, id)
        if (!(result.length)) {
            //If the module table has no instance for that patient, create a new one. 
            console.log('Data does not exists. Initializing')
            await sql.init_table(connection, moduleCode, id)
        }
        let filtered = tableNames.filterObj(data, tableNames.modules[moduleCode]);
        await sql.updateModules(connection, moduleCode, filtered, id)
    }
    console.log('Back to modules')
    res.redirect(`/landing/${id}`)

})


router.get('/:id/submitToRegistry', requireLogin, async (req, res) => {
    if (req.query.validated) {
        const moduleCode = req.query.module.slice(0, 3).toLowerCase();
        submitPatientToRegistry(connection, Registry, req.params.id, moduleCode)
        //res.send(`Ok submitted with ${moduleCode}`)
        req.flash('success', 'Patient Submitted to registry')
        res.redirect(`/landing/${req.params.id}`)
    } else {
        res.redirect(`/landing/${req.params.id}`)
    }
})

module.exports = router;