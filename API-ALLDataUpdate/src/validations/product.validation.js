const Joi = require("joi");

const CreateProduct = {
    body: Joi.object().keys({
        product_name: Joi.string().required().trim(),
        product_description: Joi.string().required().trim(),
        product_category: Joi.string().required().trim(),
        product_price: Joi.number().integer(),
        quantity: Joi.number().integer(),
        product_manufacture: Joi.string().required().trim(),
        createdate: Joi.string().required().trim(),
        expirydate: Joi.string().required().trim(),
    }),
}

module.exports ={
    CreateProduct
}