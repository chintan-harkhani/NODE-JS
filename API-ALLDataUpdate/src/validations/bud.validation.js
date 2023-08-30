
const Joi = require("joi");

const CrateBus = {
    body: Joi.object().keys({
        bus_name: Joi.string().required().trim(),
        bus_model: Joi.string().trim(),
        bus_no: Joi.string().required().trim(),
        passengername: Joi.string().required().trim(),
        passengercontactNo: Joi.number().integer().required(),
        passengeremailId: Joi.string().required().trim(),
        seatsNo: Joi.number().integer().required(),
        totalAmount: Joi.number().integer().required(),
        date: Joi.string().required().trim(),
        busTime: Joi.string().required().trim(),
        status: Joi.string().trim(),
    }),
}

module.exports ={
    CrateBus
}