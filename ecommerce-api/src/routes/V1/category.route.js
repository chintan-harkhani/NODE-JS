const express =  require("express");
const {CategoryController} = require("../../controllers");
const { CategoryValidation}  =require("../../validations");
const validate = require("../../middlewares/validate")

const  routes = express.Router();


//create category
 routes.post("/creat-category",
  validate(CategoryValidation.createCategory),
  CategoryController.createcategory
 );

/** get category list */
routes.get("/list",
  CategoryController.GetcategoryList

);
// get one Category  details
routes.get("/categorylist/:categoryId",
   CategoryController.getCategoryDetails
)

/**Delete Category  */
routes.delete('/delete-category/:categoryId',
    CategoryController.Deletecategory
);

// upadate Categroy details

routes.put("/update-category/:categoryId",
   CategoryController.updateCategoryDetails
);
module.exports =routes;
