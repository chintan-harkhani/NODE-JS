const mongoose = require("mongoose");

const CartIteamSchema = new mongoose.Schema(
    {
        product: {
            type: mongoose.Types.ObjectId,
            ref: "products"
        },
        shopping: {
            type: mongoose.Types.ObjectId,
            ref: "total_shopping"
        },
        total_amount:{
             type : Number,
             trim : true,
             default : 0,
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

const cartiteam = mongoose.model("cart_iteam", CartIteamSchema);
module.exports = cartiteam;