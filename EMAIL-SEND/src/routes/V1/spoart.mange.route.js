const  express = require("express");
const{SpoartMangeController} =require("../../controllers");
const {SpoartManageValidation} =require("../../validations");
const validate = require("../../middlewares/validate");
const  {upload} =require("../../middlewares/upload");
const auth = require("../../middlewares/auth");

const   router = express.Router();

router.post("/createchild",
upload.single("spoart_image"),
auth(),
validate(SpoartManageValidation.CreateSpoartMange),
      SpoartMangeController.CreateSpoartManage
)
//spoart list
router.get("/spoartmangelist",
    SpoartMangeController.SpoartMangeList
);

//spoart id
router.get("/spoartmangelist/:spoartmangeId",
    SpoartMangeController.SpoartMangeId
);

//delete user

router.delete("/deletespoartmange/:spoartmangeId",
    SpoartMangeController.DeleteSpoartMange
);

//update user

router.put("/updatespoartmange/:spoartmangeId",
   SpoartMangeController.UpdateSpoartMange
);
module.exports =router;