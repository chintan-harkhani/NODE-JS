const Joi = require("joi");

const CreateJewellary = {
    body: Joi.object().keys({
        Customer_name: Joi.string().required().trim(),
        Phone: Joi.number().integer().required(),
        Address: Joi.string().required().trim(),
        State: Joi.string().required().trim(),
        Qty: Joi.number().integer().required(),
        Jewellery_type: Joi.string().required().trim(),
        Jewellery_style: Joi.string().required().trim(),
        Jewellery_desc: Joi.string().trim(),
        Jewellery_color: Joi.string().trim(),
        Jewellery_metal: Joi.string().required().trim(),
        Jewellery_length: Joi.string().trim(),
        Jewellery_unit_price: Joi.string().required().trim(),
        Jewellery_Total_Price: Joi.number().integer().required(),
    }),
}

module.exports ={
    CreateJewellary
}