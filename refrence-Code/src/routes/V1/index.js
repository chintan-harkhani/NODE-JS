const express = require("express");
const userRoute = require("./user.route");
const categoryRoute = require("./category.route");
const bookRoute = require("./book.route");
const productRoute = require('./product.route');
const BusRoutes = require("./bus.route");
const TravelRoutes = require("./travel.route");
const GroceryRoutes = require("./grocery.route");
const HotelRoutes = require("./hotel.route");
const JewellaryRoutes = require("./jewellary.route");
const MovieRoutes = require("./movie.route");
const MusicRoutes = require("./music.route");
const PharmacyRoutes = require("./pharmacy.route");
const SchoolRoutes = require("./school.route");
const StationaryRoutes =require("./stationary.route");
const MoblieRoutes = require("./moblie.route")

const routes = express.Router();

routes.use("/user", userRoute);
routes.use("/category", categoryRoute);
routes.use("/bookdetails", bookRoute);
routes.use("/Product", productRoute);
routes.use("/Bus", BusRoutes);
routes.use("/Travel", TravelRoutes);
routes.use("/Grocery", GroceryRoutes);
routes.use("/Hotel", HotelRoutes);
routes.use("/Jewellary", JewellaryRoutes);
routes.use("/Movie", MovieRoutes);
routes.use("/Music", MusicRoutes);
routes.use("/Pharmacy", PharmacyRoutes);
routes.use("/School", SchoolRoutes);
routes.use("/Stationary" ,StationaryRoutes);
routes.use("/Moblie", MoblieRoutes);


module.exports = routes;