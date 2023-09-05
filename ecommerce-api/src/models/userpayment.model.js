const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Types.ObjectId,
            ref: "Users"
        },
        payment_type :{
            type : String,
            trim : true,
        },
        payment_provide:{
            type : String,
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
    }
);

const payment = mongoose.model("User_Payment", PaymentSchema);
module.exports = payment;