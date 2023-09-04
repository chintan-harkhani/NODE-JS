const express = require("express");
const { FashionController } = require("../../controllers");
const { fashionValidation } = require("../../validations");
const validate = require("../../middlewares/validate");
const routes = express.Router();

//create fashion

routes.post("/createfashion",
  validate(fashionValidation.Createfashion),
  FashionController.createFashion
)

/** get Fashion list */
routes.get("/fashionlist",
    FashionController.fashionList
);

// get one fashion  details
routes.get("/fashionlist/:fashionId",
    FashionController.getFashionDetails
)

/** Delete fashion */
routes.delete(
    "/delete-fashion/:fashionId",
    FashionController.deletefashion
);


// upadate fashion details

routes.put("/update-fashion/:fashionId",
    FashionController.updateFashionDetails
)

module.exports = routes;