const Joi = require("joi");

const CreateIteam = {
    body: Joi.object().keys({
        qty: Joi.number().integer().required(),
        order : Joi.string().trim().required(),
        product : Joi.string().trim().required(),
    }),
}

module.exports ={
    CreateIteam
}