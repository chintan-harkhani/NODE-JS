const express =  require("express");

const {SchoolController} = require("../../controllers");
const {SchoolValidation}  =require("../../validations")
const  validate  = require("../../middlewares/validate");

const routes = express.Router();

//create school
routes.post("/creat-school",
validate(SchoolValidation.CreateSchool),
   SchoolController.CreateSchool,
);

/** get school list */
routes.get("/school-list",
    SchoolController.GetSchoolList

);

/**Delete School  */
routes.delete('/delete-School/:schoolid',
    SchoolController.DeleteSchool
);

// get one School  details
routes.get("/schoollist/:schoolid",
  SchoolController.getSchoolDetails
)

// upadate School details

routes.put("/update-School/:schoolid",
SchoolController.updateSchoolDetails
)
module.exports = routes;