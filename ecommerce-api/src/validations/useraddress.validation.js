const Joi = require("joi");

const Creataddress = {
    body: Joi.object().keys({
        user: Joi.string().required().trim(),
        address: Joi.string().required().trim(),
        city: Joi.string().required().trim(),
        zip_code: Joi.number().integer().required(),
        country: Joi.string().required().trim(),
        state: Joi.string().required().trim(),
    }),
}

module.exports = {
    Creataddress
}