const express =  require("express");

const {PharmacyController} = require("../../controllers");
const {PhamarcyValidation} =require("../../validations");
const  validate  = require("../../middlewares/validate");

const routes = express.Router();

// pharmacy create
routes.post("/creat-pharmacy",
validate(PhamarcyValidation.CreatePhamarcy),
    PharmacyController.CreatePharmacy,
);

/** get pharmacy list */
routes.get("/pharmacy-list",
  PharmacyController.GetPharmacyList,

);

/**Delete pharmacy  */
routes.delete('/delete-pharmacy/:pharmacyid',
  PharmacyController.Deletepharmacy
);

// upadate pharmacy details

routes.put("/update-pharmacy/:pharmacyid",
PharmacyController.updatePharmacyDetails
)

// get one pharmacy  details
routes.get("/pharmacylist/:pharmacyid",
PharmacyController.getPharmacyDetails
)
module.exports = routes;
