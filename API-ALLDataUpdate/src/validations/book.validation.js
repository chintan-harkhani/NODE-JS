const joi = require("joi");


// create   book

const Creatbook  = {
      body : joi.object().keys({
        book_name : joi.string().required().trim(),
        book_author :joi.string().required().trim(),
        book_description :joi.string().required().trim(),
        book_price :joi.number().integer().required(),
        book_page :joi.number().integer().required(),
        book_conditions :joi.string().required().trim()

      })
}

// const  GetBookList = {
//       query : joi.object().keys({
//       })
// }

module.exports = {
      Creatbook,
//      GetBookList
}