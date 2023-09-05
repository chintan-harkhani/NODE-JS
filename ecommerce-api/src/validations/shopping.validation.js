const Joi = require("joi");

const CreateShopping = {
    body: Joi.object().keys({
        user: Joi.string().required().trim(),
        shopping_type: Joi.string().required().trim(),
        total_amount: Joi.number().integer(),
      
    }),
}

module.exports ={
    CreateShopping
}