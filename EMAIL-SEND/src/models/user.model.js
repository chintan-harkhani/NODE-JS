const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            trim: true
        },
        last_name: {
            type: String,
            trim: true,
        },
        center_select: {
            type: String,
            trim: true,
            default: "Delhi NCR",
        },
        address: {
            type: String,
            trim: true,
        },
        select_city: {
            type: String,
            trim: true,
        },
        selcet_state: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            trim: true,
        },
        moblie_no: {
            type: Number,
            trim: true,
        },
        dath_of_birth: {
            type: String,
            trim: true
        },
        is_active: {
            type: Boolean,
            default: true,
        },
    }
)

const user = mongoose.model("user", UserSchema);
module.exports = user;
