const mongoose = require("mongoose");

const jewellerySchema = new mongoose.Schema(
    {
        Customer_name: {
            type: String,
            trim: true,
        },
        Phone: {
            type: Number,
            trim: true,
        },
        Address: {
            type: String,
            trim: true,
        },
        State: {
            type: String,
            trim: true,
            default: "Gujarat",
        },
        Qty: {
            type: Number,
            trim: true,
        },
        Jewellery_type: {
            type: String,
            trim: true,
        },
        Jewellery_style: {
            type: String,
            trim: true,
        },
        Jewellery_desc: {
            type: String,
            trim: true,
        },
         Jewellery_color: {
            type: String,
            trim: true,
        },
        Jewellery_metal: {
            type: String,
            trim: true,
            default: "Gold",
        },
        Jewellery_length: {
            type: String,
            trim: true,
            default: "16 Inche"
        },
        Jewellery_unit_price :{
            type : String,
            trim : true,
        },
         Jewellery_Total_Price :{
             type : Number,
             trim : true,
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
const Jewellery = mongoose.model("Jewellery", jewellerySchema);
module.exports = Jewellery;