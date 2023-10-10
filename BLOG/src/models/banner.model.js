const mongoose  =require("mongoose");
const config = require("../config/config");

const BannerSchema = new mongoose.Schema(
    {
        banner_img :{
             type :String,
             trim : true,
        },
        banner_name :{
            type : String,
            trim :true,
       },
        banner_desc :{
             type : String,
             trim :true,
        },
        is_active: {
            type: Boolean,
            default: true,
        },
      },
      {
        timestamps: true,
        versionKey: false,
        toJSON :{
            transform : function (doc , data){
                   if(data?.banner_img){
                    data.banner_img = `${config.base_url}Images/${data.banner_img}`;
                   }
            }
        }
    }
)

const Banner = mongoose.model("Banner" , BannerSchema);
module.exports = Banner;