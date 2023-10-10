const joi  =require("joi");

//create blog
const CreateBlog= {
    body :joi.object().keys({
        blog_img :joi.string().allow(""),
        blog_name :joi.string().trim().required(),
        blog_desc :joi.string().trim().required(),
        blog_type :joi.string().trim(),
        user_role :joi.string().trim().required(),
    })
};

module.exports = {
     CreateBlog
}