const express =require("express");
const {BannerController} =require("../../controllers");
const {BannerValidation} =require("../../validations");
const validate = require("../../middlewares/validate");
const {upload} = require("../../middlewares/upload");
const auth =require("../../middlewares/auth");
const router =express.Router();

//create banner
router.post("/createbanner",
upload.single("banner_img"),
   validate(BannerValidation.CreateBanner),
   BannerController.CreateBanner
);

//banner list
router.get("/bannerlist",
  BannerController.BannerList,
)

//Banner id
router.get("/bannerlist/:bannerId",
BannerController.BannerId
)

//Banner update
router.put("/updatebanner/:bannerId",
    BannerController.UpdateBanner
)

//delete banner
router.delete("/deletebanner/:bannerId",
    BannerController.DeleteBanner
)

module.exports = router;
