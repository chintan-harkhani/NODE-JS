const Joi = require("joi");

const CreateOrder = {
    body: Joi.object().keys({
        sub_total_amount: Joi.number().integer().required(),
        shipping_amount: Joi.number().integer().required(),
        taxes_amount: Joi.number().integer().required(),
        total_amount: Joi.number().integer().required(),
        user : Joi.string().trim().required(),
    }),
}

module.exports ={
    CreateOrder
}