const express = require("express");
const userRoute = require("./user.route");
const electroniceRoute = require("./electronice.route");
const jewellaryRoutes  = require("./jewellary.route");
const FashionRoutes = require("./fashion.route");
const CategoryRoutes= require("./category.route");
const ProductRoutes = require("./product.route");
const OrderDetailsRoutes =require("./orderdetails.route");

const  routes = express.Router();

routes.use("/user", userRoute);
routes.use("/electronice", electroniceRoute);
routes.use("/jewellary" ,jewellaryRoutes);
routes.use("/fashion", FashionRoutes);
routes.use("/category", CategoryRoutes);
routes.use("/product" , ProductRoutes);
routes.use("/order", OrderDetailsRoutes);

module.exports = routes;