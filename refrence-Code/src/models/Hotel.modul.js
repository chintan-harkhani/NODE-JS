const mongoose = require("mongoose");

const Hotelschema = new mongoose.Schema(
    {
        hotel_name: {
            type: String,
            trim: true,
        },
        booking_name: {
            type: String,
            trim: true,
        },
        booking_email: {
            type: String,
            trim: true,
        },
        booking_contact: {
            type: Number,
            trim: true,
        },
        booking_room_no: {
            type: Number,
            trim: true,
        },
        Booking_roomtype: {
            type: String,
            trim: true,
        },
        checkin_date: {
            type: String,
            trim: true,
        },
        checkout_date: {
            type: String,
            trim: true,
        },
        room_price :{
             type :Number,
             trim : true,
        },
        hotel_address: {
            type: String,
            trim: true,
        },
        hotel_dec: {
            type: String,
            trim: true,
        },
        hotel_ratting: {
            type: String,
            trim: true,
        },
        hotelroom_police :{
             type : String,
             trim :true,
        },
        user : {
            type : mongoose.Types.ObjectId,
            ref : "Users"
        },
        is_active: {
            type: Boolean,
            default: true
       },

    },
    {
        timestamps: true,
        versionKey: false
    },
);
const Hotel = mongoose.model("Hotel",Hotelschema);
module.exports = Hotel;
