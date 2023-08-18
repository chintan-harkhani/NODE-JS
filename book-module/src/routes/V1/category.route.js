const express =  require("express");
const {categorycontroller} = require("../../controllers")
const  routes = express.Router();



 routes.post("/creat-category",
  // validate(categoryValidation.creatcategory),
  categorycontroller.createcategory
 );

/** get user list */
// routes.get("/list",
//   // validate(userValidatino.getUserList),
//   categorycontroller.getUserList
// );
module.exports =routes;
