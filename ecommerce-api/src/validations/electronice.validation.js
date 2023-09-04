const Joi = require("joi");

/** create user */
const CreateElectronice = {
  body: Joi.object().keys({
    company_name: Joi.string().required().trim(),
    iteam_name: Joi.string().required().trim(),
    iteam_desc: Joi.string().required().trim(),
    item_qty : Joi.number().integer(),
    iteam_price : Joi.number().integer(),
    service_provider:  Joi.string().required().trim(),
    iteam_color:  Joi.string().required().trim(),
    iteam_warranty:  Joi.string().required().trim(),
  }),
};


module.exports = {
    CreateElectronice
}