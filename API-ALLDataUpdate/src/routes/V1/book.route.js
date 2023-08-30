const express = require("express");
const { BookController } = require("../../controllers");
const { BookValidation } = require("../../validations");
const validate = require("../../middlewares/validate");
const routes = express.Router();

// create book details

routes.post("/create-books",
       validate(BookValidation.Creatbook),
    BookController.CreateBook
)

// Get book list

routes.get("/booklist",
    BookController.GetbookList
)
// get one book  details
routes.get("/booklist/:bookid",
   BookController.getBookDetails
)

/** delete book  */

routes.delete("/delete-book/:bookid",
    BookController.Deletebook
)

// upadate book details

routes.put("/update-book/:bookid",
 BookController.updateBookDetails
)
module.exports = routes;