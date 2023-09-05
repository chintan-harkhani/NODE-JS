const Joi = require("joi");

const CreateUserpayment = {
    body: Joi.object().keys({
        user: Joi.string().required().trim().required(),
        payment_type: Joi.string().required().trim().required(),
        payment_provide: Joi.string().required().trim().required(),
    }),
}

module.exports ={
    CreateUserpayment
}