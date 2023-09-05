const { TotalShoppingService } = require("../services");

// crate Total Shopping

const CreateShooping = async (req, res) => {
     try {
          const reqBody = req.body;

          const Shopping = await TotalShoppingService.CreateTotalShopping(reqBody);

          if (!Shopping) {
               throw new Error("Someting is Wrong , Please  try again later !...");
          }

          res.status(200).json({
               success: true,
               message: "Data successfully add ...",
               data: { Shopping }
          })
     }
     catch (error) {
          res.status(400).json({ success: false, message: error.message })
     }
}

//Total Shopping list
const ShoopingList = async (req, res) => {
     try {
          const GetList = await TotalShoppingService.TotalShoppingList(req, res);

          res.status(200).json({
               success: true,
               message: "SuccessFully All  Shopping  list Get.....",
               data: GetList,
          })
     } catch (error) {
          res.status(400).json({ success: false, message: error.message })
     }
}

/** delete Total Shopping list  */

const DeleteShopping = async (req, res) => {
     try {
          const shoppingId = req.params.shoppingId;
          const Exite = await TotalShoppingService.TotalShoopingId(shoppingId);
          if (!Exite) {
               throw new Error("Shoppimg Iteam Not Found....");
          }

          await TotalShoppingService.DeleteTotalShooping(shoppingId);

          res.status(200).json({
               success: true,
               message: "Total Shopping Data SuccessFully Deleteded.....",
          });
     } catch (error) {
          res.status(400).json({
               success: false,
               message: error.message
          })
     }
}


/** Total Shopping details update by id */
const updateTotalShopping = async (req, res) => {
     try {
          const shoppingId = req.params.shoppingId;
          const Exists = await TotalShoppingService.TotalShoopingId(shoppingId);
          if (!Exists) {
               throw new Error("Total Shopping data not found!");
          }

          await TotalShoppingService.UpdateTotalShopping(shoppingId, req.body);

          res.status(200).json({
               success: true,
               message: "Total Shopping  details update successfully!"
          });
     } catch (error) {
          res.status(400).json({ success: false, message: error.message });
     }
};

// get Total Shopping details
const getTotalShoppingDetails = async (req, res) => {
     try {
          const shoppingId = req.params.shoppingId
          const getDetails = await TotalShoppingService.TotalShoopingId(shoppingId);
          if (!getDetails) {
               throw new Error("Total Shopping  not found!");
          }

          res.status(200).json({
               success: true,
               message: "Total Shopping  details get successfully!",
               data: getDetails,
          });
     } catch (error) {
          res.status(400).json({ success: false, message: error.message });
     }
};

module.exports = {
   CreateShooping,
   ShoopingList,
   DeleteShopping,
   updateTotalShopping,
   getTotalShoppingDetails
}