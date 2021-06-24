const Joi = require('joi');
const ExpressError = require('../utils/ExpressError');
const { Schema, RegisterSchema, PreRegisterSchema, LoginSchema, PasswordSchema, flowchartSchema } = require('../models/schemas.js')


module.exports.requireLogin = (req, res, next) => {
    if (!req.session.loggedin) {
        return res.redirect('/')
    }
    next();
}


module.exports.requireVerification = (req, res, next) => {
    if (!req.session.allowedRegister) {
        return res.redirect('/user/preregister')
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


module.exports.validateRegisterForms = (req, res, next) => {

    const { error } = RegisterSchema.validate(req.body, { allowUnknown: true });
    if (error) {
        const msg = error.details.map(el => el.message).join(',')
        console.log(msg)

        throw new ExpressError(msg, 400)
    } else {
        next();
    }
}


module.exports.validateFlowForms = (req, res, next) => {

    const { error } = flowchartSchema.validate(req.body, { allowUnknown: true });
    if (error) {
        const msg = error.details.map(el => el.message).join(',')
        console.log(msg)

        throw new ExpressError(msg, 400)
    } else {
        next();
    }
}

module.exports.validatePreRegisterForms = (req, res, next) => {

    const { error } = PreRegisterSchema.validate(req.body, { allowUnknown: true });
    if (error) {
        const msg = error.details.map(el => el.message).join(',')
        console.log(msg)

        throw new ExpressError(msg, 400)
    } else {
        next();
    }
}


module.exports.validateLoginForms = (req, res, next) => {

    const { error } = LoginSchema.validate(req.body, { allowUnknown: true });
    if (error) {
        const msg = error.details.map(el => el.message).join(',')
        console.log(msg)

        throw new ExpressError(msg, 400)
    } else {
        next();
    }
}

module.exports.validatePassword = (req, res, next) => {

    const { error } = PasswordSchema.validate(req.body, { allowUnknown: true });
    if (error) {
        const msg = error.details.map(el => el.message).join(',')
        console.log(msg)

        throw new ExpressError(msg, 400)
    } else {
        next();
    }
}