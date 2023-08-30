const mongoose = require("mongoose")

const MobileSchema = new mongoose.Schema(
    {
        mobile_brand: {
            type: String,
            trim: true,
        },
        mobile_modelname: {
            type: String,
            trim: true,
        },
        Network_Service_provider: {
            type: String,
            trim: true,
            default: "Unlocked for All Carriers",
        },
        Model_color: {
            type: String,
            trim: true,
            default: "Black",
        },
        Offer: {
            type: String,
            trim: true,
            default: "20%"
        },
        mobile_Size: {
            type: String,
            trim: true,
            default: "4 GB RAM  + 64 GB ROM",
        },
        mobile_deac: {
            type: String,
            trim: true,
        },
        mobile_warranty: {
            type: String,
            trim: true,
            default: "1 Year manufacturer Warranty for handset & 6 months for accessories",
        },
        mobile_Qty: {
            type: Number,
            trim: true,
        },
        mobile_price: {
            type: Number,
            trim: true,
        },
        username: {
            type: String,
            trim: true,
        },
        contact_number: {
            type: Number,
            trim: true,
        },
        address: {
            type: String,
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

)

const moblie = mongoose.model("Moblie", MobileSchema);

module.exports = moblie;