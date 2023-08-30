const Joi = require("joi");

const CreateStationary = {
    body: Joi.object().keys({
        item_name: Joi.string().required().trim(),
        item_price: Joi.number().integer(),
        item_quantity: Joi.number().integer(),
        item_color: Joi.string().required().trim(),
        item_type: Joi.string().required().trim(),
        item_dec: Joi.string().required().trim(),
        item_manufacture: Joi.string().required().trim(),
    })
}

module.exports = {
    CreateStationary
}