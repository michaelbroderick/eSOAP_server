const BaseJoi = require('joi');
const sanitizeHtml = require('sanitize-html');
const passwordComplexity = require("joi-password-complexity");

const complexityOptions = {
    min: 8,
    max: 30,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
    symbol: 1,
    requirementCount: 2,
};

const extension = (joi) => ({
    type: 'string',
    base: joi.string(),
    messages: {
        'string.escapeHTML': '{{#label}} must not include HTML!'
    },
    rules: {
        escapeHTML: {
            validate(value, helpers) {
                const clean = sanitizeHtml(value, {
                    allowedTags: [],
                    allowedAttributes: {},
                });
                if (clean !== value) return helpers.error('string.escapeHTML', { value })
                return clean;
            }
        }
    }
});


const Joi = BaseJoi.extend(extension)


module.exports.Schema = Joi.object({

    uniqueid: Joi.number().min(0).allow(''),
    age: Joi.number().min(0).allow(''),
    bp: Joi.number().min(0).allow(''),
    temperature: Joi.number().min(0).allow(''),
    pulse: Joi.number().min(0).allow(''),
    rr: Joi.number().min(0).allow(''),
    spo2: Joi.number().min(0).max(100).allow(''),
    wcc: Joi.number().min(0).allow(''),
    hb: Joi.number().min(0).allow(''),
    crp: Joi.number().min(0).allow(''),
    amylase: Joi.number().min(0).allow(''),
    ggt: Joi.number().min(0).allow(''),
    creat: Joi.number().min(0).allow(''),
    inr: Joi.number().min(0).allow(''),
    baseexcess: Joi.number().min(0).allow(''),
    basedeficit: Joi.number().min(0).allow(''),
    lactate: Joi.number().min(0).allow(''),
    neutrophilcount: Joi.number().min(0).allow(''),
    otherpresententingcompaintid: Joi.string().allow('').escapeHTML(),
    ercpfindings: Joi.string().allow('').escapeHTML(),
    findings: Joi.string().allow('').escapeHTML(),
    demographicslocum: Joi.string().allow('').escapeHTML(),
    otherprovisionaldiagnosis: Joi.string().allow('').escapeHTML(),
    otherimagingtype: Joi.string().allow('').escapeHTML(),
    othercomplication: Joi.string().allow('').escapeHTML(),
    otherfinaldiagnosis: Joi.string().allow('').escapeHTML(),
    otherfinaldiagnosis: Joi.string().allow('').escapeHTML(),
    otherindforsurgery: Joi.string().allow('').escapeHTML(),
    othermainprocedure: Joi.string().allow('').escapeHTML(),
    othersecondprocedure: Joi.string().allow('').escapeHTML(),
    otherthirdprocedure: Joi.string().allow('').escapeHTML(),
    otheroperativefindings: Joi.string().allow('').escapeHTML(),
    sbo_otheraetiology: Joi.string().allow('').escapeHTML(),
    sbo_otherintervention: Joi.string().allow('').escapeHTML(),
    surgerylocum: Joi.string().allow('').escapeHTML(),
    otherprocedure: Joi.string().allow('').escapeHTML(),
    timeseen: Joi.date().max(new Date().toLocaleString("en-US", { timeZone: "Eire" })).allow(''),
    timereferred: Joi.date().max(new Date().toLocaleString("en-US", { timeZone: "Eire" })).allow(''),



})

module.exports.RegisterSchema = Joi.object({

    username: Joi.string().required().escapeHTML(),
    password: Joi.string().required().escapeHTML(),
    // password: passwordComplexity(complexityOptions),
    confirmPassword: Joi.string().required().escapeHTML(),
    fname: Joi.string().required().escapeHTML(),
    lname: Joi.string().required().escapeHTML(),
    // email: Joi.string().required().escapeHTML(),

})


module.exports.PreRegisterSchema = Joi.object({

    email: Joi.string().email().escapeHTML(),
    vCode: Joi.string().escapeHTML(),

})

module.exports.PasswordSchema = Joi.object({

    password: passwordComplexity(complexityOptions),

})

module.exports.LoginSchema = Joi.object({

    username: Joi.string().required().escapeHTML(),
    password: Joi.string().required().escapeHTML(),

})

module.exports.flowchartSchema = Joi.object({
    age: Joi.number().min(0).allow(''),
    symptomduration: Joi.number().min(0).allow(''),
    wcc: Joi.number().min(0).allow(''),
    crp: Joi.number().min(0).allow(''),
})