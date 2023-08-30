const express =  require("express");
const {categorycontroller} = require("../../controllers");
const { CategoryValidation}  =require("../../validations");
const validate = require("../../middlewares/validate")

const  routes = express.Router();


//create category
 routes.post("/creat-category",
  validate(CategoryValidation.Creatcategory),
  categorycontroller.createcategory
 );

/** get category list */
routes.get("/list",
  categorycontroller.GetcategoryList

);
// get one Category  details
routes.get("/categorylist/:categoryid",
   categorycontroller.getCategoryDetails
)

/**Delete Category  */
routes.delete('/delete-category/:categoryid',
    categorycontroller.Deletecategory
);

// upadate Categroy details

routes.put("/update-category/:categoryid",
   categorycontroller.updateCategoryDetails
);
module.exports =routes;
