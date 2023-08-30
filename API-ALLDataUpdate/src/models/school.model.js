const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema(
    {
        school_name: {
            type: String,
            trim: true,
        },
        school_address: {
            type: String,
            trim: true,
        },
        school_medium: {
            type: String,
            trim: true,
            default: "Gujarati",
        },
        school_principal: {
            type: String,
            trim: true,
        },
        school_emailaddress :{
             type : String,
             trim : true,
        },
        school_mobile_no: {
            type: Number,
            trim: true,
        },
        school_zone: {
            type: String,
            trim: true,
        },
        school_type: {
            type: String,
            trim: true,
            default : "Government"
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
const school = mongoose.model("School", schoolSchema);
module.exports = school;

