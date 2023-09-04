const Joi = require("joi");

/** create category */
const createCategory = {
  body: Joi.object().keys({
    category_name: Joi.string().required().trim(),
    category_desc: Joi.string().required().trim(),
    fashion: Joi.string().trim(),
    electronice: Joi.string().trim(),
    jewellary:  Joi.string().trim(),
  })
};


module.exports = {
    createCategory
}