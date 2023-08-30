const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
    {
        Movie_title: {
            type: String,
            trim: true,
        },
        Direcated_name: {
            type: String,
            trim: true,
        },
        Movie_desc :{
             type : String,
             trim :true,
        },
        Movie_date: {
            type: String,
            trim: true,
        },
        Movie_time: {
            type: String,
            trim: true,
        },
        Movie_address: {
            type: String,
            trim: true,
        },
        Movies_seat_row: {
            type: Number,
            trim: true,
        },
        Movie_seat_no: {
            type: Number,
            trim: true,
        },
        Movie_ticket_price: {
            type: Number,
            trim: true,
        },
        is_active: {
            type: Boolean,
            default: true
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Movies = mongoose.model("Movies", MovieSchema);
module.exports = Movies;