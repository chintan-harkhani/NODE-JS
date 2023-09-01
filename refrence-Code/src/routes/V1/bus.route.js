const express = require("express");

const {BusController} = require("../../controllers");
const {BusValidation} =require("../../validations");
const validate =require("../../middlewares/validate");

const routes = express.Router();

//create bus

routes.post("/creat-bus",
  validate(BusValidation.CrateBus),
BusController.CreateBus
);
/** get Bus list */
routes.get("/bus-list",
  BusController.GetBusList,

);

/**Delete Bus  */
routes.delete('/delete-bus/:busId',
    BusController.DeleteBus
);

// get one bus  details
routes.get("/buslist/:busId",
   BusController.getBusDetails
)


/** bus details update by id */
routes.put(
     "/update-bus/:busId",
     BusController.updateBusDetails
);
module.exports = routes;