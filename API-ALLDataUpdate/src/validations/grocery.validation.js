
const Joi = require("joi");

const CreateGrocery = {
    body: Joi.object().keys({
        Grocery_name: Joi.string().required().trim(),
        Grocery_desc: Joi.string().trim(),
        Grocery_Kg: Joi.string().trim(),
        Grocery_price: Joi.number().integer().required(),
        Grocery_total_amount: Joi.number().integer().required(),
        Customer_name: Joi.string().required().trim(),
        Phone_Number: Joi.number().integer().required(),
        Customer_email: Joi.string().required().trim(),
        deleivery_address: Joi.string().required().trim(),
    }),
}

module.exports ={
    CreateGrocery
}