const  {GroceryService} = require("../services");

// crate  Grocery

const CreateGrocery = async (req, res) => {
    try {
        const reqBody = req.body;

        const grocery = await GroceryService.Creategrocery(reqBody);

        if(!grocery){
            throw new Error("Someting is Wrong , Please  try again later !...");
        }

        res.status(200).json({
            success: true,
            message:"Data successfully add ..." ,
            data:{grocery}
         })
    }
    catch(error){
        res.status(400).json({ success : false, message : error.message})
    }
}


//grocery list
const GetGroceryList = async (req, res) => {
    try {
         const GetList = await GroceryService.GetGrocerylist(req, res);

         res.status(200).json({
              success: true,
              message: "SuccessFully All Grocery list Get.....",
              data: GetList,
         })
    } catch (error) {
         res.status(400).json({ success: false, message: error.message })
    }
}
/** delete Grocery list  */

const Deletegrocery = async (req, res) => {
    try {
         const groceryid = req.params.groceryid;
         const grocerydelid = await GroceryService.GroceryId(groceryid);
         if (!grocerydelid) {
              throw new Error("Grocery Iteam Not Found....");
         }

         await GroceryService.DeleteGrocery(groceryid);

         res.status(200).json({
              success: true,
              message: "Grocery Data SuccessFully Deleteded.....",
         });
    } catch (error) {
         res.status(400).json({
              success: false,
              message: error.message
         })
    }
}
/** Grocery details update by id */
const updateGroceryDetails = async (req, res) => {
     try {
          const groceryid = req.params.groceryid;
          const groceryExists = await GroceryService.GroceryId(groceryid);
          if (!groceryExists) {
               throw new Error("Grocery data not found!");
          }

          await GroceryService.UpdateGrocery(groceryid, req.body);

          res.status(200).json({
               success: true,
               message: "Grocery details update successfully!"
          });
     } catch (error) {
          res.status(400).json({ success: false, message: error.message });
     }
};

// get Grocery details
const getGroceryDetails = async (req, res) => {
     try {
         const groceryid = req.params.groceryid
         const getDetails = await GroceryService.GroceryId(groceryid);
         if (!getDetails) {
             throw new Error("Grocery not found!");
         }
 
         res.status(200).json({
             success: true,
             message: "Grocery details get successfully!",
             data: getDetails,
         });
     } catch (error) {
         res.status(400).json({ success: false, message: error.message });
     }
 };
 
module.exports ={
    CreateGrocery,
    GetGroceryList,
    Deletegrocery,
    updateGroceryDetails,
    getGroceryDetails
}