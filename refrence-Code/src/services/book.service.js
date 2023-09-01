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
  return book_details.find(
    // { $or: [{ is_active: true, book_price: 780 }] }
    );
}
/** get category id details by id */
const BookId = async (bookid) => {
  return book_details.findById(bookid);
}
/** Delete category */
const DeleteBook = async (bookid) => {
  return book_details.findByIdAndDelete(bookid);
}
// update details
const UpdateBook = async (bookid, updateBody ,) => {
  return book_details.findByIdAndUpdate(bookid, { $set: updateBody });
}
module.exports = {
  CreatBook,
  GetBookList,
  BookId,
  DeleteBook,
  UpdateBook,
};