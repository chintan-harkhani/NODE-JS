const express = require("express");
const { UserController } = require("../../controllers");
const { UserValidation } = require("../../validations");
const validate = require("../../middlewares/validate");
const routes = express.Router();

//create user
routes.post("/create-user",
    validate(UserValidation.createUser),
    UserController.createuser
)
/** get user list */
routes.get("/list",
    UserController.userlist
);

// get one user  details
routes.get("/userlist/:userId",
    UserController.getUserDetails
)

/** Delete user */
routes.delete(
    "/delete-user/:userId",
    UserController.deleteUser
);


// upadate user details

routes.put("/update-user/:userId",
    UserController.updateUserDetails
)

module.exports = routes;
