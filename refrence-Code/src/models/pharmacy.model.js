const mongoose = require("mongoose");

const PharmacySchema = new mongoose.Schema(
    {
        Full_name: {
            type: String,
            trim: true,
        },
        Email_id: {
            type: String,
            trim: true,
        },
        Contact_no: {
            type: Number,
            trim: true,
        },
        City_Name: {
            type: String,
            trim: true,
        },
        state_name: {
            type: String,
            trim: true,
            default: "Gujarat",
        },
         Cource_name :{
             type : String,
             trim : true,
             default : "B.Pharm - Bachelor (Pharmacy)",
         },
         Cource_type :{
             type : String,
             trim : true,
             default : "External"
         },
         Cource_fees :{
             type : Number,
             trim : true,
         },
         book : {
            type : mongoose.Types.ObjectId,
            ref : "Book_details",
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
const Pharmacy = mongoose.model("Pharmacy", PharmacySchema);
module.exports = Pharmacy;