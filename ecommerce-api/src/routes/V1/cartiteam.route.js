const express =  require("express");
const {CartieamController} = require("../../controllers");
const { CartIteamValidation}  =require("../../validations");
const validate = require("../../middlewares/validate")

const  routes = express.Router();


//create CartIteam
 routes.post("/creat-cartiteam",
  validate(CartIteamValidation.CreateCartIteam),
   CartieamController.CreateCart
 );

/** get CartIteam list */
routes.get("/list",
CartieamController.CartIteamList

);
// get one CartIteam  details
routes.get("/Cartiteamlist/:cartId",
CartieamController.getCartIteamId
)

/**Delete CartIteam  */
routes.delete('/delete-cartiteam/:cartId',
CartieamController.DeleteCartIteam
);

// upadate CartIteam details

routes.put("/update-cartiteam/:cartId",
CartieamController.updateCartIteam
);
module.exports =routes;
