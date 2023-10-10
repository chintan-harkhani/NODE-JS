const config = require("../config/config");
const mongoose  =require("mongoose");

const BlogSchema = new mongoose.Schema(
    {
        blog_img :{
             type :String,
             trim : true,
        },
        blog_name :{
            type : String,
            trim :true,
       },
        blog_desc :{
             type : String,
             trim :true,
        },
        blog_type:{
          type :String,
          trim :true,
          default : "Branding"
        },
        user_role :{
             type :mongoose.Types.ObjectId,
             ref : "user"
        },
        createdate :{
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
             transform : function (doc ,data){
                 if(data?.blog_img){
                        data.blog_img = `${config.base_url}blog/${data.blog_img}`;
                 }
             }
        }
    }
)

const Blog = mongoose.model("Blog" , BlogSchema);
module.exports = Blog;