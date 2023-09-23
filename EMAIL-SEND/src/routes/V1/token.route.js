const {TokenController} = require("../../controllers");
const express = require("express");
const validate = require("../../middlewares/validate");
const  {TokenValidation} =require("../../validations");


const  router =express.Router();
//crete Token
router.post(
    "/cretetoken",
    validate(TokenValidation.CreteToken),
    TokenController.CreteToken
);
//verify token
router.get("/verifytoken",
TokenController.VerifyToken
)
module.exports = router;
