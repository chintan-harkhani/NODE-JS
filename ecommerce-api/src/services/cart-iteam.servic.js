const { CartIteam } = require("../models");

// create CartIteam
const createCartIteam = async (reqBody) => {
    return CartIteam.create(reqBody);
}



/** get CartIteam list  */

const CartiteamList = async (req, res) => {
    return CartIteam.find(
        // {$or : [{is_active : true, Jewellery_metal : "Gold"}]}
        );
}

/** Get CartIteam id */
const CartiteamId = async (cartId) => {
    return CartIteam.findById(cartId);
}

/** Delete CartIteam */

const DeleteCartIteam = async (cartId) => {
    return CartIteam.findByIdAndDelete(cartId);
}

// update CartIteam details
const UpdateCartiteam = async (cartId, updateBody) => {
    return CartIteam.findByIdAndUpdate(cartId, { $set: updateBody });
  }
module.exports = {
   createCartIteam,
   CartiteamList,
   CartiteamId,
   DeleteCartIteam,
   UpdateCartiteam
}