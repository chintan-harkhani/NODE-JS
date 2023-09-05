const express = require("express");
const { IteamOrderController } = require("../../controllers");
const { IteamOrderValidation } = require("../../validations");
const validate = require("../../middlewares/validate");
const routes = express.Router();

//create Iteam Order

routes.post("/createiteam",
  validate(IteamOrderValidation.CreateIteam),
  IteamOrderController.CreateIteamOrder
)

/** get Iteam Order list */
routes.get("/list",
    IteamOrderController.IteamOrderList
);

// get one Iteam Order  details
routes.get("/iteamlist/:iteamId",
    IteamOrderController.getIteamOrderDetails
)

/** Delete Iteam Order */
routes.delete(
    "/delete-iteam/:iteamId",
   IteamOrderController.deleteIteamOrder
);


// upadate Iteam Order details

routes.put("/update-iteam/:iteamId",
    IteamOrderController.updateIteamOrder
)

module.exports = routes;