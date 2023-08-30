const Joi = require("joi");

const CreateTravel = {
    body: Joi.object().keys({
        Trave_type: Joi.string().trim(),
        Travelers_name: Joi.string().required().trim(),
        Travelers_email: Joi.string().required().trim(),
        Travelers_contact: Joi.number().integer().required(),
        Travel_Price: Joi.number().integer(),
        Travel_From: Joi.string().required().trim(),
        Travel_To: Joi.string().required().trim(),
        Travel_start_date: Joi.string().required().trim(),
        Travel_return_date: Joi.string().required().trim(),
        Travel_class: Joi.string().trim(),
        Travel_service: Joi.string().required().trim(),
    })
}

module.exports ={
    CreateTravel
}