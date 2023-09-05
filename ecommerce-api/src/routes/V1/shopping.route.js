const express =  require("express");
const {TotalSoppingController} = require("../../controllers");
const {TotoalShoppingValidation }  =require("../../validations");
const validate = require("../../middlewares/validate")

const  routes = express.Router();


//create TotalSopping
 routes.post("/creat-shopping",
  validate(TotoalShoppingValidation.CreateShopping),
  TotalSoppingController.CreateShooping
 );

/** get TotalSopping list */
routes.get("/list",
  TotalSoppingController.ShoopingList

);
// get one TotalSopping  details
routes.get("/shoppinglist/:shoppingId",
   TotalSoppingController.getTotalShoppingDetails
)

/**Delete TotalSopping  */
routes.delete('/delete-shopping/:shoppingId',
   TotalSoppingController.DeleteShopping
);

// upadate TotalSopping details

routes.put("/update-shopping/:shoppingId",
TotalSoppingController.updateTotalShopping
);
module.exports =routes;
