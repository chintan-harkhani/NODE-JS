const joi = require("joi");


//create moblie

const CreatemoblieVal = {
    body: joi.object().keys({
        mobile_brand: joi.string().trim().required(),
        mobile_modelname: joi.string().trim().required(),
        Network_Service_provider: joi.string().trim(),
        Model_color: joi.string().trim(),
        Offer: joi.string().trim(),
        mobile_Size: joi.string().trim(),
        mobile_deac: joi.string().required().trim(),
        mobile_warranty: joi.string().trim(),
        mobile_Qty: joi.number().integer().required(),
        mobile_price: joi.number().integer().required(),
        username: joi.string().trim().required(),
        contact_number: joi.number().integer().required(),
        address: joi.string().required().trim()
    })
}

module.exports = {
    CreatemoblieVal
}