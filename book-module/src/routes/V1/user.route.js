const express =  require("express");
const {usercontroller} = require("../../controllers")
const  routes = express.Router();


 routes.post("/creat-user",
  // validate(userValidation.creatUser),
   usercontroller.createuser
 );

/** get user list */
routes.get("/list",
  // validate(userValidatino.getUserList),
  usercontroller.userlist
);
module.exports =routes;

