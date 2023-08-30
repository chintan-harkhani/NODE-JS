const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        product_name: {
            type: String,
            trim: true,
       },
        product_description: {
            type: String,
            trim: true,
        },
        product_price: {
            type: Number,
            trim: true,
             default :0
        },
        product_category: {
            type: String,
            trim: true,
        },
        product_manufacture: {
            type: String,
            trim: true,
            default : "Indian"
        },
        quantity: {
            type: Number,
            trim: true,
            default : 1,
        },
        createdate: {
            type: String,
            trim: true,
        },
        expirydate: {
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
    },
);
const Product = mongoose.model("products", ProductSchema);
module.exports = Product;
