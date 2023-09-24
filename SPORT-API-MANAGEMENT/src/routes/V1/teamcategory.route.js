const express = require("express");
const { TeamCategoryController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const { TeamCategoryValidation } = require("../../validations")
const router = express.Router();

//create team category
router.post("/teamcategorycreate",
    validate(TeamCategoryValidation.CreateTeamCategory),
    TeamCategoryController.CreateTeamcategory
)

//TeamCategory list
router.get("/teamcategorylist",
  TeamCategoryController.TeamcategoryList,
)

//Teamcategory id
router.get("/teamcategory/:teamcategoryId",
    TeamCategoryController.TeamcategoryId
)

//Teamcategory update
router.put("/updateteamcategory/:teamcateogryId",
    TeamCategoryController.UpdateTeamcategory
)

//delete founder
router.delete("/deleteteamcategory/:teamcategoryId",
    TeamCategoryController.DeleteTeamcategory
)
module.exports = router;