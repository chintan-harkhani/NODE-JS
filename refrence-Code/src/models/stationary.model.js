const mongoose = require("mongoose");

const stationarySchema = new mongoose.Schema(
    {
        item_name: {
            type: String,
            trim: true,
        },
        item_price: {
            type: Number,
            trim: true,
            default : 0
        },
        item_color: {
            type: String,
            trim: true,
        },
        item_type: {
            type: String,
            trim: true,
        },
        item_dec: {
            type: String,
            trim: true,
        },
        item_quantity: {
            type: Number,
            trim: true,
            default: 1
        },
        item_manufacture: {
            type: String,
            trim: true,
        },
        book :{
            type :  mongoose.Types.ObjectId,
            ref : "Book_details",
        },
        user : {
            type : mongoose.Types.ObjectId,
            ref : "Users",
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
const Stationary = mongoose.model("Stationary", stationarySchema);
module.exports = Stationary;