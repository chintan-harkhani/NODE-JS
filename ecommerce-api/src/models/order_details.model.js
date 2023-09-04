const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        sub_total_amount: {
            type: Number,
            trim: true,
        },
        shipping_amount: {
            type: Number,
            trim: true,
        },
        taxes_amount: {
            type: Number,
            trim: true,
        },
        total_amount: {
            type: Number,
            trim: true,
        },
        user: {
            type: mongoose.Types.ObjectId,
            ref: "Users"
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

const order = mongoose.model("order_details", orderSchema);
module.exports = order;