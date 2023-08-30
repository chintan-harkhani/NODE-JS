const {Grocery} = require("../models");


// create grocery

const Creategrocery = async (reqBody) => {
    return Grocery.create(reqBody);
}



/** get  list grocery */

const GetGrocerylist = async (req, res) => {
    return Grocery.find(
      // {$or:[{is_active : true ,Grocery_total_amount : 600}]}
      );
  }

/** Get grocery id */
  const GroceryId = async (groceryid) => {
    return Grocery.findById(groceryid);
}

/** Delete grocery */

const  DeleteGrocery  = async (groceryid) =>{
return  Grocery.findByIdAndDelete(groceryid);
}


// update grocery details
const UpdateGrocery = async (groceryid, updateBody) => {
  return Grocery.findByIdAndUpdate(groceryid, { $set: updateBody });
}
module.exports ={
     Creategrocery,
     GetGrocerylist,
     GroceryId,
     DeleteGrocery,
     UpdateGrocery
}