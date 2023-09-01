const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
    {
        category_name: {
            type: String,
            trim: true,
            // required: true,
        },

        category_desc: {
            type: String,
            trim: true,
            // required: true,
        },
        category_code: {
            type: String,
            trim: true,
        },
        category_service :{
             type : String,
             trim : true,
        },
        category_choose :{
             type :String,
             trim :true,
            //  required : true,
        },
        grocery : {
           type : mongoose.Types.ObjectId,
           ref : "Grocery",
        },
        user : {
            type : mongoose.Types.ObjectId,
            ref : "Users",
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
