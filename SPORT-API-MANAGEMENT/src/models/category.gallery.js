const mongoose = require("mongoose")

const gallerySchema = new mongoose.Schema(
    {
      spoart_img : {
         type: String,
         trim :true
      },
      spoart_category :{
         type : mongoose.Types.ObjectId,
         ref:"categorygame",
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

const spoartimg = mongoose.model("spoartimg", gallerySchema);
module.exports = spoartimg;