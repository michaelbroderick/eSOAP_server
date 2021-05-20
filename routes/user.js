const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const sql = require('../models/sqlCommands.js')
const { connection } = require('../config/db_config')
const { validateRegisterForms, validateLoginForms, validatePassword, requireVerification, validatePreRegisterForms } = require('../helpers/middleware')
const { sendEmail } = require('../helpers/backendScripts.js');
const session = require('express-session');


router.get('/preregister', (req, res) => {

    res.render('preregister', { messages: req.flash('error'), codeSent: req.session.codeSent })
})

router.post('/sendCode', validatePreRegisterForms, async (req, res) => {

    const email = req.body.email
    let result = await sql.checkEmail(connection, 'authorisedEmails', email);    //Check if the user exists in the authorised table
    if (!result[0]) {
        req.flash('error', 'Email not authorised. Please contact administrator')
        res.redirect('/user/preregister')
    } else {
        if (result[0].registered == 'No') {     //Check if the user has been registered

            req.session.vCode = Math.floor(100000 + Math.random() * 900000)     //Generate a random verification code
            req.session.codeSent = true
            req.session.emailID = result[0].id
            sendEmail(email, req.session.vCode)     // Send an email to that address
            res.redirect('/user/preregister')
        }
        else {
            req.flash('error', 'Email already registered')  //Idea, could have linked to a variable in env file
            res.redirect('/user/preregister')
        }
    }


})

router.post('/preregister', validatePreRegisterForms, async (req, res) => {
    const userVcode = req.body.vCode
    if (req.session.vCode === parseInt(userVcode)) {
        req.session.allowedRegister = true
        res.redirect('/user/register')
    } else {
        req.flash('error', 'Verification code does not match')
        res.redirect('/user/preregister')
    }


})


router.get('/register', requireVerification, (req, res) => {
    res.render('register', { messages: req.flash('error') })
})


router.post('/register', requireVerification, validateRegisterForms, validatePassword, async (req, res) => {

    const data = req.body;
    data.emailID = req.session.emailID // Pass the referrence id from authorisedAccounts to the accounts table. The tables are now linked. 
    const result = await sql.checkUser(connection, data.username);

    if (result[0]) {
        req.flash('error', 'Username already taken')
        res.redirect('/user/register')
    }
    else if (data.password != data.confirmPassword) {
        req.flash('error', 'Passwords do not match')
        res.redirect('/user/register')
    } else {
        delete data.confirmPassword
        data.password = await bcrypt.hash(data.password, 12)
        await sql.registerUser(connection, data)
        await sql.updateUserTable(connection, 'authorisedEmails', { 'registered': 'Yes' }, req.session.emailID)// Update the authorised registration table
        res.redirect('/patient_number')
    }
})

router.post('/login', validateLoginForms, async (req, res) => {

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