const Joi = require('joi');
const ExpressError = require('./utils/ExpressError');
const { Schema } = require('./schemas.js')


module.exports.requireLogin = (req, res, next) => {
    if (!req.session.loggedin) {
        return res.redirect('/')
    }
    next();
}

module.exports.validateForms = (req, res, next) => {

    const { error } = Schema.validate(req.body, { allowUnknown: true });
    console.log(req.body.uniqueid)
    if (error) {
        const msg = error.details.map(el => el.message).join(',')
        console.log(msg)

        throw new ExpressError(msg, 400)
    } else {
        next();
    }

}