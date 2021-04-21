const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const sql = require('../sqlCommands.js')
const mysql = require("mysql");


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'esoap_local',
    timezone: 'gmt'
})

router.get('/register', (req, res) => {
    res.render('register')
})

router.post('/register', async (req, res) => {
    const data = req.body;
    data.password = await bcrypt.hash(data.password, 12)
    await sql.registerUser(connection, data)
    res.redirect('/patient_number')
})

router.post('/login', async (req, res) => {

    const { username, password } = req.body;

    const result = await sql.checkUser(connection, username);
    let validatePassword = false;
    try {
        validatePassword = await bcrypt.compare(password, result[0].password);
    }
    catch { }
    if (validatePassword) {
        req.session.loggedin = true;
        req.session.username = username;
        req.session.userid = result[0].id;
        res.redirect('/patient_number');
    } else {

        req.flash('error', 'Invalid username or password')
        res.redirect('/')
    }

})


router.get('/signout', (req, res) => {

    req.session.destroy();
    res.redirect('/')

});


module.exports = router;