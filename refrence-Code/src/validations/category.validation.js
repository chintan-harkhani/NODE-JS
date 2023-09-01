const joi = require("joi");


// create   book

const Creatcategory = {
    body: joi.object().keys({
        category_name: joi.string().required().trim(),
        category_desc: joi.string().required().trim(),
        category_code: joi.string().required().trim(),
        category_service: joi.string().required().trim(),
        category_choose: joi.string().required().trim()
    }),
};
module.exports ={
    Creatcategory
}