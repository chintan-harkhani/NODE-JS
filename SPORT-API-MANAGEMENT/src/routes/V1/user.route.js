const express = require("express");
const { UserController } = require("../../controllers");
const { UserValidation } = require("../../validations");
const validate = require("../../middlewares/validate");
const routes = express.Router();

//create user
routes.post("/createuser",
    validate(UserValidation.CreateUser),
    UserController.CreateUser
);

//user list
routes.get("/userlist",
    UserController.UserList
);

//user id
routes.get("/userlist/:userId",
    UserController.UserId
);

//delete user
routes.delete("/deleteuser/:userId",
    UserController.DeleteUser
);

//update user
routes.put("/updateuser/:userId",
    UserController.UpdateUser
);

module.exports = routes;