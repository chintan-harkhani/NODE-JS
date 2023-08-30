const Joi = require("joi");

const CreatePhamarcy = {
    body: Joi.object().keys({
        Full_name: Joi.string().required().trim(),
        Email_id: Joi.string().required().trim(),
        Contact_no: Joi.number().integer().required(),
        City_Name: Joi.string().required().trim(),
        state_name: Joi.string().trim(),
        Cource_name: Joi.string().trim(),
        Cource_type: Joi.string().trim(),
        Cource_fees: Joi.number().integer().required(),
    }),
}

module.exports ={
    CreatePhamarcy
}