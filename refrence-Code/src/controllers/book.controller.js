const { bookservice } = require("../services");

/** create book details */
const CreateBook = async (req, res) => {
     try {
          const reqBody = req.body;

          const Book = await bookservice.CreatBook(reqBody);
          if (!Book) {
               throw new Error("Something went wrong, please try again or later!");
          }
          res.status(200).json({
               success: true,
               message: "Book Details SuucessFully Created.....",
               data: { Book },
          })
     } catch (error) {
          res.status(400).json({ success: false, message: error.message });
     }
}


/**   Get book list  */

const GetbookList = async (req, res) => {
     try {
          const GetList = await bookservice.GetBookList(req, res);

          res.status(200).json({
               success: true,
               message: "SuccessFully All Book list Get.....",
               data: GetList,
          })
     } catch (error) {
          res.status(400).json({ success: false, message: error.message })
     }
}

/** delete book list  */

const Deletebook = async (req, res) => {
     try {
          const bookid = req.params.bookid;
          const bookdelete = await bookservice.BookId(bookid);
          if (!bookdelete) {
               throw new Error("Book Iteam Not Found....");
          }

          await bookservice.DeleteBook(bookid);

          res.status(200).json({
               success: true,
               message: "Books Data SuccessFully Deleteded.....",
          });
     } catch (error) {
          res.status(400).json({
               success: false,
               message: error.message
          })
     }
}

// get book details
const getBookDetails = async (req, res) => {
     try {
          const bookid = req.params.bookid
          const getDetails = await bookservice.BookId(bookid);
          if (!getDetails) {
               throw new Error("Book not found!");
          }

          res.status(200).json({
               success: true,
               message: "User details get successfully!",
               data: getDetails,
          });
     } catch (error) {
          res.status(400).json({ success: false, message: error.message });
     }
};

/** Book details update by id */
const updateBookDetails = async (req, res) => {
     try {
          const bookid = req.params.bookid;
          const bookExists = await bookservice.BookId(bookid);
          if (!bookExists) {
               throw new Error("Book data not found!");
          }

          await bookservice.UpdateBook(bookid, req.body);

          res.status(200).json({
               success: true,
               message: "Book details update successfully!"
          });
     } catch (error) {
          res.status(400).json({ success: false, message: error.message });
     }
};
module.exports = {
     CreateBook,
     GetbookList,
     Deletebook,
     updateBookDetails,
     getBookDetails
}

