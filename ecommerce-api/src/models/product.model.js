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
            default :0,
        },
        select_model: {
            type: String,
            trim: true,
        },
        product_ratting :{
            type : Number,
            trim : true,
        },
        category : {
             type : mongoose.Types.ObjectId,
             ref : "cetegory",
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
