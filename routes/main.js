const express = require('express');
const router = express.Router();
const sql = require('../models/sqlCommands.js')
const { connection, Registry } = require('../config/db_config')
const { requireLogin, validateForms } = require('../helpers/middleware')
const tableNames = require('../models/tableNames.js');
const { returnKOIs } = require('../helpers/decisionTools')
const stringify = require('csv-stringify');


router.get('/testing', (req, res) => {
    res.render('masterProforma')
})



router.post('/testing', (req, res) => {
    console.log(req.body.sho)
    res.render('signin', { messages: req.flash('error') })
})

router.get('/', (req, res) => {
    res.render('signin', { messages: req.flash('error') })
})

router.get('/patient_number', requireLogin, (req, res) => {
    res.render('patient_number')
})

router.get('/landing/:id', requireLogin, async (req, res) => {
    // console.log(req.session)
    const result = await sql.getjoinedData(connection, req.params.id)
    const data = result[0]
    // console.log(data)
    let moduleCode = ''
    try { moduleCode = data.moduleid.slice(0, 3).toLowerCase() }
    catch { };

    let kois = [];

    const history = await sql.getHistory(connection, req.session.userid)
    // console.log(data.moduleid)
    const KOItargets = await returnKOIs(data);
    // console.log(KOItargets)
    if (data.moduleid) kois = await sql.getKOIs(connection, data.moduleid)
    // console.log(data.readmittedwithin30daysid)

    const regResult = await sql.selectById(Registry, 'demographics', req.params.id)
    let inRegistry = Boolean(regResult.length);

    const lastViewed = { lastviewed: new Date() }
    // await sql.updateModules(connection, 'demographics', lastViewed, req.params.id)
    await sql.logHistory(connection, req.session.userid, req.params.id)
    res.render('landing', { req, data, history, kois, KOItargets, inRegistry, moduleCode: moduleCode, messages: req.flash('success') })
})

router.post('/landing', requireLogin, validateForms, async (req, res) => {

    const pcn = req.body.user;
    req.session.pcn = pcn;
    //Check if a record exists already for the patient if not create the minimum dataset
    try {
        const result = await sql.findByPCN(connection, req.session.pcn);

        if (result.length === 0) {
            //Creates a an initial table and generates an id
            const insertDemo = await sql.insertIntoDemographics(connection, req.session.pcn, req.session.userid);
            req.session.patientid = insertDemo.insertId
            for (let table of Object.keys(tableNames.tables).slice(1)) {
                await sql.init_table(connection, table, req.session.patientid)
            }
            console.log('Created a row for patient', req.session.patientid, 'PCN =', req.session.pcn)

        }
        // else you need to populate the form with values in the database. (This might take a bit of thinking!!)
        else {
            console.log('Found patient pcn', req.session.pcn)
            req.session.patientid = result[0].patientid
        }
        res.redirect(`/landing/${req.session.patientid}`)

    }
    catch (error) {
        console.log(error)
    }

});


router.get('/exportCSV', requireLogin, async (req, res) => {

    const data = await sql.getAllData(Registry);
    const jsonData = JSON.parse(JSON.stringify(data));
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=\"' + 'validationData.csv\"');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Pragma', 'no-cache');
    stringify(jsonData, { header: true })
        .pipe(res);
})

module.exports = router;



