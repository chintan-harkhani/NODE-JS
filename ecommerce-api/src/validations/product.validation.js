const Joi = require("joi");

const CreateProduct = {
    body: Joi.object().keys({
        product_name: Joi.string().required().trim(),
        product_description: Joi.string().required().trim(),
        product_price: Joi.number().integer(),
        select_model : Joi.string().trim().required(),
        product_ratting : Joi.number().integer().required(),
        category : Joi.string().trim(),

    }),
}

module.exports ={
    CreateProduct
}