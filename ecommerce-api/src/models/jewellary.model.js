const mongoose = require("mongoose");

const jewellerySchema = new mongoose.Schema(
    {
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
        Jewellery_metal: {
            type: String,
            trim: true,
            default: "Gold",
        },
        service_provider: {
            type: String,
            trim: true,
        },
         Jewellery_Total_Price :{
             type : Number,
             trim : true,
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