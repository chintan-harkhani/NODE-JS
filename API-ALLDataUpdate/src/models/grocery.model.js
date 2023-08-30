const mongoose = require("mongoose");

const GrocerySchema = new mongoose.Schema(
    {
        Grocery_name: {
            type: String,
            trim: true,
        },
        Grocery_desc: {
            type: String,
            trim: true,
        },
        Grocery_Kg: {
            type: String,
            trim: true,
            default: "1 KG",
        },
        Grocery_price: {
            type: Number,
            trim: true,
        },
        Grocery_total_amount: {
            type: Number,
            trim: true,
        },
        Customer_name: {
            type: String,
            trim: true,
        },
        Phone_Number: {
            type: Number,
            trim: true,
        },
        Customer_email: {
            type: String,
            trim: true,
        },
        deleivery_address: {
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

const Grocery = mongoose.model("Grocery", GrocerySchema);
module.exports = Grocery;