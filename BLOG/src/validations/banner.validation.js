const joi  =require("joi");

//create banner
const CreateBanner = {
    body :joi.object().keys({
        banner_img :joi.string().allow(""),
        banner_name :joi.string().trim().required(),
        banner_desc :joi.string().trim().required(),
    })
};

module.exports = {
     CreateBanner
}   