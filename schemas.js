const BaseJoi = require('joi');
const sanitizeHtml = require('sanitize-html');

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

})