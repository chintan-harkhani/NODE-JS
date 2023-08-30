const express = require("express");
const { usercontroller } = require("../../controllers");
const { UserValidation } = require("../../validations");
const validate = require("../../middlewares/validate")
const routes = express.Router();

//create user
routes.post("/creat-user",
  validate(UserValidation.createUser),
  usercontroller.createuser
);

/** get user list */
routes.get("/list",
  usercontroller.userlist
);

// get one user  details
routes.get("/userlist/:userId",
   usercontroller.getUserDetails
)

/** Delete user */
routes.delete(
  "/delete-user/:userId",
  usercontroller.deleteUser
);


// upadate user details

routes.put("/update-user/:userId",
  usercontroller.updateUserDetails
)

module.exports = routes;

