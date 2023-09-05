const { TotalShopping } = require("../models");

/** create TotalShooping
* @param {object} reqBody
* @returns {Promise<totalshooping>}
*/

const CreateTotalShopping = async (reqBody) => {
    return TotalShopping.create(reqBody);
}
/** get TotalShooping list  */

const TotalShoppingList = async (req, res) => {
    return TotalShopping.find(
      // {$or:[{is_active :true}]}
      );
  }

/** Get TotalShooping id */
  const TotalShoopingId = async (shoppingId) => {
    return TotalShopping.findById(shoppingId);
}

/** Delete TotalShooping */

const  DeleteTotalShooping  = async (shoppingId) =>{
return  TotalShopping.findByIdAndDelete(shoppingId);
}

// update TotalShooping
const UpdateTotalShopping = async (shoppingId, updateBody) => {
  return TotalShopping.findByIdAndUpdate(shoppingId, { $set: updateBody });
}


module.exports = {
   CreateTotalShopping,
   TotalShoppingList,
   TotalShoopingId,
   DeleteTotalShooping,
   UpdateTotalShopping
}