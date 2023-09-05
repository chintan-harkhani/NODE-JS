const express = require("express");
const userRoute = require("./user.route");
const electroniceRoute = require("./electronice.route");
const jewellaryRoutes = require("./jewellary.route");
const FashionRoutes = require("./fashion.route");
const CategoryRoutes = require("./category.route");
const ProductRoutes = require("./product.route");
const OrderDetailsRoutes = require("./orderdetails.route");
const IteamOrderRoutes = require("./iteamorder.route");
const TotalShoppingRoutes = require("./shopping.route");
const CartIteamRoutes = require("./cartiteam.route");
const UserAddressRoutes = require("./useraddress.route");
const UserPaymentRoutes = require("./userpayment.route");


const routes = express.Router();

routes.use("/user", userRoute);
routes.use("/electronice", electroniceRoute);
routes.use("/jewellary", jewellaryRoutes);
routes.use("/fashion", FashionRoutes);
routes.use("/category", CategoryRoutes);
routes.use("/product", ProductRoutes);
routes.use("/order", OrderDetailsRoutes);
routes.use("/iteamorder", IteamOrderRoutes);
routes.use("/shopping", TotalShoppingRoutes);
routes.use("/cartiteam", CartIteamRoutes);
routes.use("/address", UserAddressRoutes);
routes.use("/payment", UserPaymentRoutes);
module.exports = routes;