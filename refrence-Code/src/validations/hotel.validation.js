
const Joi = require("joi");

const CreateHotel = {
    body: Joi.object().keys({
        hotel_name: Joi.string().required().trim(),
        booking_name: Joi.string().required().trim(),
        booking_email: Joi.string().required().trim(),
        booking_contact: Joi.number().integer().required(),
        booking_room_no: Joi.number().integer(),
        Booking_roomtype: Joi.string().required().trim(),
        checkin_date: Joi.string().trim(),
        checkout_date: Joi.string().trim(),
        room_price: Joi.number().integer().required(),
        hotel_address: Joi.string().required().trim(),
        hotel_dec: Joi.string().trim(),
        hotel_ratting: Joi.string().trim(),
        hotelroom_police: Joi.string().required().trim(),
    }),
}

module.exports ={
    CreateHotel
}