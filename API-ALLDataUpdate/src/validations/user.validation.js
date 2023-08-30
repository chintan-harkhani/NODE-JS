const Joi = require("joi");

/** create user */
const createUser = {
  body: Joi.object().keys({
    first_name: Joi.string().required().trim(),
    last_name: Joi.string().required().trim(),
    age : Joi.number().integer().required(),
    email: Joi.string().required().trim(),
    password:  Joi.string().required().trim(),
  }),
};


module.exports = {
     createUser
}