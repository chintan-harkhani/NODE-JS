const { book_details } = require("../models");

/** create book details
 * @param {object} reqBody
 * @returns {Promise <book_details>}
 */
const CreatBook = async(reqBody) =>{
     return book_details.create(reqBody);
}


/** get Book list  */

  const  GetBookList =  async (req,res) =>{
        return book_details.find();
  }

module.exports ={
    CreatBook,
    GetBookList
};