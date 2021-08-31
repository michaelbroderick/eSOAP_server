const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const sql = require('../models/sqlCommands.js')

module.exports.sendEmail = (emailAddress, vCode) => {

    const msg = {
        to: emailAddress, // Change to your recipient
        from: 'brodermi@tcd.ie', // Change to your verified sender
        subject: 'Your eSOAP Platform Verification Code',
        text: `Hi, \n \nYour verification code is ${vCode}. Please use this code register for your account`,
        // html: '<strong>Hi, your verification code is . Please use this register for your account</strong>',
    }
    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })
}

module.exports.checkAndUpdate = async (cnx, table, col_name, id, data) => {
    // Function for updating rows when you just want a single record and don't mind overwriting what has been previously recorded. 

    // Search for the id in the table
    let result = await sql.selectByAny(cnx, table, col_name, id)
    if (!(result.length)) {
        // if the id doesn't exist, create a new entry
        await sql.insert_data(cnx, table, data)
    } else {
        // Otherwise update what's in the table
        await sql.updateAny(cnx, table, data, col_name, id)
    }
}