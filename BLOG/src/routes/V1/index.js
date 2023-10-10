const express = require("express");
const UserRouter  = require("./user.route");
const TokenRouter = require("./token.route");
const BannerRouter =require("./banner.route");
const BlogRouter =require("./blog.route");

const router = express.Router();

router.use("/user" , UserRouter);
router.use("/token" , TokenRouter);
router.use("/banner" , BannerRouter);
router.use("/blog" , BlogRouter);

module.exports = router;