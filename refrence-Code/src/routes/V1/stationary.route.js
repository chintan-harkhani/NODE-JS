const express =  require("express");

const {StationaryController} = require("../../controllers");
const {StationaryValidation } =require("../../validations");
const  validate  = require("../../middlewares/validate");

const routes = express.Router();

//create stationary
routes.post("/creat-stationary",
validate(StationaryValidation.CreateStationary),
  StationaryController.Createstationary
);

/** get Stationary list */
routes.get("/stationary-list",
 StationaryController.GetStationaryList

);

/**Delete Stationary  */
routes.delete('/delete-stationary/:stationaryid',
    StationaryController.DeleteStationary
);

// upadate Stationary details

routes.put("/update-stationary/:stationaryid",
StationaryController.updateStationaryDetails
)

// get one Stationary  details
routes.get("/stationarylist/:stationaryid",
  StationaryController.getStationaryDetails
)
module.exports = routes;