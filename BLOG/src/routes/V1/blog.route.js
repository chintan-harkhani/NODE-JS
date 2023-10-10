const express =require("express");
const {BlogController} =require("../../controllers");
const {BlogValidation} =require("../../validations");
const validate = require("../../middlewares/validate");
const {upload} = require("../../middlewares/upload")
const auth =require("../../middlewares/auth");
const router =express.Router();

//create blog
router.post("/createblog",
upload.single("blog_img" ),
   validate(BlogValidation.CreateBlog),
   auth(),
   BlogController.CreateBlog
);

//banner list
router.get("/bloglist",
 BlogController.BlogList,
)

//Blog id
router.get("/bloglist/:blogId",
BlogController.BlogId
)

//Blog update
router.put("/updateblog/:blogId",
    BlogController.UpdateBlog
)

//delete blog
router.delete("/deleteblog/:blogId",
   BlogController.DeleteBlog
)

//manage blog status
router.put("/blogstatus/:blogId",
   BlogController.ManageBlogStatus
)
module.exports = router;