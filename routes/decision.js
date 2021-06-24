const express = require('express');
const router = express.Router();
const sql = require('../models/sqlCommands.js')
const { connection } = require('../config/db_config')
const { requireLogin, validateFlowForms } = require('../helpers/middleware')
const tableNames = require('../models/tableNames.js');
const { makeRifObj } = require('../helpers/decisionTools')
const { checkAndUpdate } = require('../helpers/backendScripts')
const stringify = require('csv-stringify');



router.get('/:id/flowchart', requireLogin, async (req, res) => {
    const { id } = req.params;
    const result = await sql.getjoinedData(connection, id);
    const data = result[0];

    const result1 = await sql.selectById(connection, 'flowchart_vars', id)
    const data1 = result1[result1.length - 1];
    let result2 = []
    let data2 = {}
    if (data1) {
        result2 = await sql.selectByAny(connection, 'clinical_decision', 'flowid', data1.id)
        data2 = result2[0]
    }
    const dataMerged = { ...data2, ...data1, ...data }
    if (data1) dataMerged.flowID = data1.id;
    let jsonData = JSON.stringify(dataMerged)
    let moduleCode = ''
    try { moduleCode = dataMerged.moduleid.slice(0, 3).toLowerCase() }
    catch { };
    const rifObj = makeRifObj(dataMerged);
    let criteria = [];
    for (i = 0; i < 5; i++) {
        criteria[i] = await sql.getCriteria(connection, moduleCode, i)
    }


    res.render('flowchart_test', { dataMerged, jsonData, id, req, criteria, rifObj, scroller: req.flash('success') })
})


router.post('/:id/flowchartIP', requireLogin, validateFlowForms, async (req, res) => {
    const data = req.body;

    const { id } = req.params;

    for (let dt in data) {
        if (Array.isArray(data[dt])) {
            data[dt] = data[dt].join('&')
        }
        if (data[dt] === '') {
            data[dt] = null;
        }
    }

    data.userid = req.session.emailID
    data.patientid = id
    // Check
    // results = await sql.selectById(connection, flowchart_vars, id)
    // if (results.length === 0) {
    //     await sql.updateModules(connection, flowchart_vars, data, id)
    // }
    // else {
    await sql.insert_data(connection, 'flowchart_vars', data)
    // }

    if (data.symptomduration) {
        if (data.symptomduration <= 24) {
            data.hrsdayssincepainonsetid = 'hours_0-24'
        }
        else if (data.symptomduration >= 7 * 24) {
            data.hrsdayssincepainonsetid = 'Days_7+'
        }
        else {
            data.hrsdayssincepainonsetid = `Days_${Math.floor(data.symptomduration / 24)}}`
        }
    }


    for (let table of Object.keys(tableNames.tables)) {
        let filtered = tableNames.filterObj(data, tableNames.tables[table]);
        if (Object.keys(filtered).length !== 0) {
            console.log(filtered)
            await sql.updateModules(connection, table, filtered, id)
        }
    }

    const moduleCode = data.moduleid.slice(0, 3).toLowerCase();
    let filtered = tableNames.filterObj(data, tableNames.modules[moduleCode]);
    await sql.updateModules(connection, moduleCode, filtered, id)


    req.flash('success', 'Submitted')
    res.redirect(`/decision/${id}/flowchart`)

})




router.post('/:id/flowchartOP', requireLogin, async (req, res) => {

    const { id } = req.params;
    const data = req.body;

    checkAndUpdate(connection, 'clinical_decision', 'flowid', data.flowid, data)

    res.redirect(`/landing/${id}`)

})

router.post('/flowchartAJAX', requireLogin, async (req, res) => {
    console.log(req.body)
    const data = req.body;

    checkAndUpdate(connection, 'clinical_decision', 'flowid', data.flowid, data)
})

module.exports = router;
