const Joi = require("joi");

//create token
const CreteToken ={
    body : Joi.object({
        user :Joi.string().trim().required(), 
    }),
};

module.exports ={
    CreteToken
}