const Joi = require("joi");

const CreateCartIteam = {
    body: Joi.object().keys({
        product: Joi.string().required().trim(),
        shopping: Joi.string().required().trim(),
        total_amount: Joi.number().integer(),
    }),
}

module.exports ={
    CreateCartIteam
}