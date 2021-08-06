const express = require('express');
const router = express.Router();
const sql = require('../models/sqlCommands.js')
const { connection, Registry } = require('../config/db_config')
const { requireLogin, validateForms } = require('../helpers/middleware')
const tableNames = require('../models/tableNames.js');
const { returnKOIs } = require('../helpers/decisionTools')
const stringify = require('csv-stringify');

router.get('/:id/show', requireLogin, async (req, res) => {
    console.log(req.session)
    const result = await sql.getjoinedData(connection, req.params.id)
    const data = result[0]
    console.log(data)
    let kois = [];
    let jsonData = JSON.stringify(data)
    const KOItargets = await returnKOIs(data);
    if (data.moduleid) kois = await sql.getKOIs(connection, data.moduleid)


    res.render('patientReport', { req, data, kois, KOItargets, jsonData})
})

module.exports = router;
