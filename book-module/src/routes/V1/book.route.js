const express = require("express");
const { BookController } = require("../../controllers");
// const {BookValidation} = require("../../validations");
const routes = express.Router();

// create book details

routes.post("/create-books",
    //    validate(BookValidation.Creatbook),
    BookController.CreateBook
)

// Get book list

routes.get("/booklist",
    //validate(BookValidation.GetBookList),
    BookController.GetbookList
)

/** delete user  */

routes.delete("/delete-book/:bookid",
    //validate(BookValidation.DeleteBook),
    BookController.Deletebook
)
module.exports = routes;