const mongoose = require("mongoose");

const iteamorderSchema = new mongoose.Schema(
    {
        qty: {
            type: Number,
            trim: true,
        },
        order : {
            type : mongoose.Types.ObjectId,
            ref : "order_details"
        },
        product: {
            type: mongoose.Types.ObjectId,
            ref: "products"
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

const order = mongoose.model("iteam_order", iteamorderSchema);
module.exports = order;