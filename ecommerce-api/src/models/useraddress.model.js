const mongoose = require("mongoose");

const UseraddressSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Types.ObjectId,
            ref: "Users"
        },
        address: {
            type: String,
            trim: true,
        },
        city: {
            type: String,
            trim: true,
        },
        zip_code: {
            type: Number,
            trim: true,
        },
        country: {
            type: String,
            trim: true,
        },
        state: {
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
);

const useraddress = mongoose.model("useraddress", UseraddressSchema);
module.exports = useraddress;