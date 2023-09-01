const mongoose = require("mongoose");

const travelSchema = new mongoose.Schema(
    {
        Trave_type: {
            type: String,
            trim: true,
            default: "Trains"
        },
        Travelers_name: {
            type: String,
            trim: true,
        },
        Travelers_email: {
            type: String,
            trim: true,
        },
        Travelers_contact: {
            type: Number,
            trim: true,
        },
        Travel_From: {
            type: String,
            trim: true,
        },
        Travel_To: {
            type: String,
            trim: true,
        },
        Travel_start_date: {
            type: String,
            trim: true,
        },
        Travel_Price: {
            type: Number,
            default: 0
        },
        Travel_return_date: {
            type: String,
            trim: true,
        },
        Travel_class: {
            type: String,
            trim: true,
            default: "First"
        },
        Travel_service: {
            type: String,
            trim: true,
        },
         bus :{
            type : mongoose.Types.ObjectId,
            ref : "Bus",
         },
         hotel : {
            type : mongoose.Types.ObjectId,
            ref : "Hotel",
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
const travel = mongoose.model("Travels", travelSchema);
module.exports = travel;