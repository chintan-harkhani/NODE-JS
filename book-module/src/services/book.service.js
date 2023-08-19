const { book_details } = require("../models");

/** create book details
 * @param {object} reqBody
//  * @returns {Promise <book_details>}
 */
const CreatBook = async (reqBody) => {
  return book_details.create(reqBody);
}


/** get Book list  */

const GetBookList = async (req, res) => {
  return book_details.find();
}

/** get category id details by id */

const DeleteBookId = async (bookid) => {
      return book_details.findById(bookid);
}

/** Delete category */

 const  DeleteBook  = async (bookid) =>{
  return  book_details.findByIdAndDelete(bookid);
 }

module.exports = {
  CreatBook,
  GetBookList,
  DeleteBookId,
  DeleteBook
};