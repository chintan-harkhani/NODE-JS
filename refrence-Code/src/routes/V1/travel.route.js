const {TravelController} =require("../../controllers");
const express = require("express");
const validate = require("../../middlewares/validate");
const  {TravelValidation} =require("../../validations");

const routes = express.Router();


//create travel
routes.post("/creat-travel",
validate(TravelValidation.CreateTravel),
  TravelController.CreateTravel
);

/** get travel list */
routes.get("/travel-list",
    TravelController.GetTravelList,

);

/**Delete travel  */
routes.delete('/delete-travel/:travelid',
    TravelController.DeleteTravel,
);

// upadate Travel details

routes.put("/update-travel/:travelid",
TravelController.updateTravelDetails
)

// get one travel  details
routes.get("/travellist/:travelid",
TravelController.getTravelDetails
)
module.exports = routes;