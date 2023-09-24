const express = require("express");
const FounderRouter = require("./founder.route");
const ContactRouter =require("./contact.route");
const CategoryRoute =require("./category.route");
const TeamCategory = require("./teamcategory.route");
const router = express.Router();

router.use("/founder" ,FounderRouter);
router.use("/contact" , ContactRouter);
router.use("/category" , CategoryRoute);
router.use("/teamcategory" , TeamCategory)
module.exports = router;