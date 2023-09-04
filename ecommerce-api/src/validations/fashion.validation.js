const Joi = require("joi");

/** create user */
const Createfashion = {
  body: Joi.object().keys({
    brand_name: Joi.string().required().trim(),
    iteam_name: Joi.string().required().trim(),
    iteam_desc: Joi.string().required().trim(),
    item_qty : Joi.number().integer(),
    iteam_price : Joi.number().integer(),
    iteam_offer: Joi.number().integer().required(),
    iteam_color:  Joi.string().required().trim(),
  }),
};


module.exports = {
    Createfashion
}