const express = require("express");
const userRoute = require("./user.route");
const categoryRoute =require("./category.route");
const bookRoute = require("./book.route")

const  routes = express.Router();

routes.use("/user",userRoute);
routes.use("/category",categoryRoute);
routes.use("/bookdetails",bookRoute);

module.exports = routes;