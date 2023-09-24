const express = require("express");
const FounderRouter = require("./founder.route");
const ContactRouter =require("./contact.route");
const CategoryRoute =require("./category.route");
const TeamCategoryRouter = require("./teamcategory.route");
const MatchRoute =require("./match.route");
const TournamentRoute =require("./tournament.route");
const SpoartResultRoute = require("./result.route");
const SpoartNewsRoute =require("./news.route");
const router = express.Router();

router.use("/founder" ,FounderRouter);
router.use("/contact" , ContactRouter);
router.use("/category" , CategoryRoute);
router.use("/teamcategory" , TeamCategoryRouter);
router.use("/match" , MatchRoute);
router.use("/tournament" , TournamentRoute);
router.use("/result", SpoartResultRoute)
router.use("/news", SpoartNewsRoute)
module.exports = router;