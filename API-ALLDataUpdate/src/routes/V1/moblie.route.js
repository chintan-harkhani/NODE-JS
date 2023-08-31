const express = require("express");
const { MoblieController } = require("../../controllers");
const { MoblieValidation } = require("../../validations")
const validate = require("../../middlewares/validate");

const routes = express.Router();

//create moblie 

routes.post("/create-moblie",
    validate(MoblieValidation.CreatemoblieVal),
    MoblieController.Createmobile
)


// Get Moblie list

routes.get("/moblielist",
    MoblieController.Getmobilelist
)

// get one moblie  details
routes.get("/mobliedetails/:mobileId",
    MoblieController.GetmobileDetails
)

/** delete moblie  */

routes.delete("/delete-moblie/:mobileId",
    MoblieController.Deletemobile
)

// upadate moblie details

routes.put("/update-moblie/:mobileId",
    MoblieController.updateMobileDetails
)

//mange status code  update

routes.put("/manageStatus/:mobileId",
    MoblieController.manageMoblie
)

module.exports = routes;