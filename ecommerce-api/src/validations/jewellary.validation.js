const Joi = require("joi");

const CreateJewellary = {
    body: Joi.object().keys({
        Jewellery_type: Joi.string().required().trim(),
        Jewellery_style: Joi.string().required().trim(),
        Jewellery_desc: Joi.string().trim(),
        Jewellery_metal: Joi.string().trim(),
        service_provider: Joi.string().required().trim(),
        Jewellery_Total_Price: Joi.number().integer().required(),
    }),
}

module.exports ={
    CreateJewellary
}