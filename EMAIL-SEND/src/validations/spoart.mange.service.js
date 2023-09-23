const Joi = require("joi");

//create spoart
const CreateSpoartMange = {
  body: Joi.object().keys({
    spoart_image: Joi.string().allow(""),
    game_name: Joi.string().trim().required(),
  })
}

module.exports = {
  CreateSpoartMange
}