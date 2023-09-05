const mongoose = require("mongoose");

const ShoppingSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Types.ObjectId,
            ref: "Users"
        },
        shopping_type :{
            type : String,
            trim : true,
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

const shopping = mongoose.model("total_shopping", ShoppingSchema);
module.exports = shopping;