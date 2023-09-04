const express = require("express");
const { ElectroniceController } = require("../../controllers");
const { ElectroniceValidation } = require("../../validations");
const validate = require("../../middlewares/validate");
const routes = express.Router();

//create Electronice
routes.post("/create-Electronice",
    validate(ElectroniceValidation.CreateElectronice),
    ElectroniceController.CreateElectronice
)
/** get Electronice list */
routes.get("/list",
    ElectroniceController.ElectroniceList
);

// get one Electronice  details
routes.get("/Electronicelist/:electroniceId",
   ElectroniceController.getElectroniceDetails
)

/** Delete Electronice */
routes.delete(
    "/delete-Electronice/:electroniceId",
   ElectroniceController.deleteElectronice
);


// upadate Electronice details

routes.put("/update-Electronice/:electroniceId",
   ElectroniceController.updateElectronice
)

module.exports = routes;
