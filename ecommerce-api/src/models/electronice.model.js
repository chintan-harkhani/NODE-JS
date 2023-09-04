const mongoose = require("mongoose");

const electroniceSchema = new mongoose.Schema(
    {
        company_name: {
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
        service_provider: {
            type: String,
            trim: true,
        },
        iteam_color: {
            type: String,
            trim: true
        },
        iteam_warranty: {
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

const electronice = mongoose.model("Electronice", electroniceSchema);
module.exports = electronice;