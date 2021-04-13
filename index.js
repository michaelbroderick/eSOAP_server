const express = require('express');
const mysql = require("mysql");
const session = require('express-session');
const app = express();
const path = require('path');
const tableNames = require('./tableNames.js');
const sql = require('./sqlCommands.js')
const { getPatientData, local2registry, submitPatientToRegistry } = require('./moveReg.js');
const ExpressError = require('./utils/ExpressError');
const { isArray } = require('util');
const flash = require('connect-flash');
const stringify = require('csv-stringify');
const { exists } = require('fs');
const { runSQL } = require("./runSQL.js")


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(flash());


app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'esoap_local'
})

const Registry = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'esoap_global'
})

// app.use((req, res, next) => {
//     res.locals.messages = req.flash('error');
//     console.log()
//     next();
// })

const requireLogin = (req, res, next) => {
    if (!req.session.loggedin) {
        return res.redirect('/')
    }
    next();
}

// let failedLogin = false;

app.get('/', (req, res) => {
    // failedLogin = false;
    // failedLogin = req.query.val;

    res.render('patient_number')
})


// app.get('/register', (req, res) => {
//     res.render('register')
// })

// app.post('/register', async (req, res) => {
//     const data = req.body;
//     data.password = await bcrypt.hash(data.password, 12)
//     await sql.registerUser(connection, data)
//     res.redirect('/patient_number')
// })

// app.post('/auth', async (req, res) => {

//     const { username, password } = req.body;

//     const result = await sql.checkUser(connection, username);
//     let validatePassword = false;
//     try {
//         validatePassword = await bcrypt.compare(password, result[0].password);
//     }
//     catch { }
//     if (validatePassword) {
//         req.session.loggedin = true;
//         req.session.username = username;
//         req.session.userid = result[0].id;
//         res.redirect('patient_number');
//     } else {
//         failedLogin = true;
//         res.redirect('/?val=true')
//     }

// })


app.get('/patient_number', (req, res) => {
    res.render('patient_number')
})

app.get('/landing/:id', async (req, res) => {
    console.log(req.session)
    result = await sql.selectById(connection, 'demographics', req.params.id)
    let data = result[0]
    res.render('landing', { req, data })
})

app.post('/landing', async (req, res) => {

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


// ***** New Code ****//
app.get('/modules/:id/show', async (req, res) => {
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


app.get('/modules/:id/edit', async (req, res) => {

    // Get all the data that exists for patient [id]
    const { id } = req.params;
    let validate = req.query.val;
    const result = await sql.getjoinedData(connection, id);
    const data = result[0]
    // console.log(data)
    for (let dt in data) {
        if (!data[dt]) {
            //console.log('hello')
            delete data[dt];
        }
    }
    let jsonData = JSON.stringify(data)
    res.render('masterForm', { jsonData, validate, req })
})

app.post('/modules/:id', async (req, res) => {
    // A bit of preprocessing
    const data = req.body;
    // console.log(data)
    const { id } = req.params;
    if (Array.isArray(data.procedureid)) {
        data.procedureid = data.procedureid.join("");
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
        const moduleCode = data.moduleid.slice(0, 3).toLowerCase();
        console.log('Module exists', moduleCode)
        let result = await sql.selectById(connection, moduleCode, id)
        if (!(result.length)) {
            console.log('Data does not exists. Initializing')
            await sql.init_table(connection, moduleCode, id)
        }
        console.log('Data exists, filtering')
        let filtered = tableNames.filterObj(data, tableNames.modules[moduleCode]);
        await sql.updateModules(connection, moduleCode, filtered, id)
    }
    console.log('Back to modules')
    res.redirect(`/modules/${id}/show`)

})


app.get('/modules/:id/submitToRegistry', async (req, res) => {
    if (req.query.validated) {
        const moduleCode = req.query.module.slice(0, 3).toLowerCase();
        submitPatientToRegistry(connection, Registry, req.params.id, moduleCode)
        //res.send(`Ok submitted with ${moduleCode}`)
        res.redirect(`/landing/${req.params.id}`)
    } else {
        res.redirect(`/modules/${req.params.id}/show`)
    }
})

// end new code///


app.get('/exportCSV', async (req, res) => {

    const data = await sql.getAllData(Registry);
    const jsonData = JSON.parse(JSON.stringify(data));
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=\"' + 'validationData.csv\"');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Pragma', 'no-cache');
    stringify(jsonData, { header: true })
        .pipe(res);
})



app.get('/signout', (req, res) => {

    req.session.destroy();
    res.redirect('/')

});

app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404))
})

app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = "Oh no somethignwent wrong!";
    res.status(statusCode).render('error', { err });
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})

