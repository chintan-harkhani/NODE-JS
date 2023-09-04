const { category } = require("../models");

/** create category
* @param {object} reqBody
* @returns {Promise<category>}
*/

const CreateCategory = async (reqBody) => {
    return category.create(reqBody);
}
/** get category list  */

const GetCategoryList = async (req, res) => {
    return category.find(
      // {$or:[{is_active :true, category_code : "DEWVF245G4543"}]}
      );
  }

/** Get category id */
  const CategoryId = async (categoryId) => {
    return category.findById(categoryId);
}

/** Delete category */

const  DeleteCategory  = async (categoryId) =>{
return  category.findByIdAndDelete(categoryId);
}

// update Category
const UpdateCategory = async (categoryId, updateBody) => {
  return category.findByIdAndUpdate(categoryId, { $set: updateBody });
}


module.exports = {
    CreateCategory,
    GetCategoryList,
    CategoryId,
    DeleteCategory,
    UpdateCategory
}