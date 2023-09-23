const express = require("express");
const SpoartMangeRouter =require("./spoart.mange.route");
const UserRouter =require("./user.route");
const TokenRoute =require("./token.route");

const router =express.Router();

router.use("/spoartmange" , SpoartMangeRouter);
router.use("/user" , UserRouter);
router.use("/token" , TokenRoute);

module.exports = router;