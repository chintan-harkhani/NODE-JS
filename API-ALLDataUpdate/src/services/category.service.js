const { category } = require("../models");

/** create category
* @param {object} reqBody
* @returns {Promise<category>}
*/

const createCategory = async (reqBody) => {
    return category.create(reqBody);
}
/** get category list  */

const GetCategoryList = async (req, res) => {
    return category.find(
      // {$or:[{is_active :true, category_code : "DEWVF245G4543"}]}
      );
  }

/** Get category id */
  const CategoryId = async (categoryid) => {
    return category.findById(categoryid);
}

/** Delete category */

const  DeleteCategory  = async (categoryid) =>{
return  category.findByIdAndDelete(categoryid);
}

// update Category
const UpdateCategory = async (categoryid, updateBody) => {
  return category.findByIdAndUpdate(categoryid, { $set: updateBody });
}
module.exports = {
    createCategory,
    GetCategoryList,
    CategoryId,
    DeleteCategory,
    UpdateCategory
}