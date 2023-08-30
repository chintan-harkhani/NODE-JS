const Joi = require("joi");

const CreateMovie = {
    body: Joi.object().keys({
        Movie_title: Joi.string().required().trim(),
        Direcated_name: Joi.string().required().trim(),
        Movie_date: Joi.string().required().trim(),
        Movie_desc: Joi.string().trim(),
        Movie_date: Joi.string().required().trim(),
        Movie_time: Joi.string().required().trim(),
        Movie_address: Joi.string().required().trim(),
        Movies_seat_row: Joi.number().integer().required(),
        Movie_seat_no: Joi.number().integer().required(),
        Movie_ticket_price: Joi.number().integer(),
    }),
}

module.exports ={
    CreateMovie
}