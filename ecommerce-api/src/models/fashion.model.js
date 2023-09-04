const mongoose = require("mongoose");

const fashionSchema = new mongoose.Schema(
    {
        brand_name: {
            type: String,
            trim: true,
        },
        iteam_name: {
            type: String,
            trim: true,
        },
        iteam_desc: {
            type: String,
            trim: true,
        },
        item_qty: {
            type: Number,
            trim: true,
            default: 0
        },
        iteam_price: {
            type: Number,
            trim: true,
            default: 0
        },
        iteam_offer: {
            type: Number,
            trim: true
        },
        iteam_color: {
            type: String,
            trim: true
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

const fashion = mongoose.model("Fashion", fashionSchema);
module.exports = fashion;