const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
    {
        category_name: {
            type: String,
            trim: true,
        },
        category_desc: {
            type: String,
            trim: true,
        },
        fashion: {
            type: mongoose.Types.ObjectId,
            ref: "Fashion",
        },
        electronice: {
            type: mongoose.Types.ObjectId,
            ref: "Electronice",
        },
        jewellary: {
            type: mongoose.Types.ObjectId,
            ref: "Jewellery",
        },
        is_active: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);
const category = mongoose.model("cetegory", CategorySchema);
module.exports = category;
