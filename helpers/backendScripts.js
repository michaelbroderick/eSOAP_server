const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)


module.exports.sendEmail = (emailAddress, vCode) => {

    const msg = {
        to: 'brodermi@tcd.ie', // Change to your recipient
        from: emailAddress, // Change to your verified sender
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