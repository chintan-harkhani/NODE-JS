const {BlogService} =require("../services");

//create blog
const CreateBlog = async (req, res) => {
    try {
        const reqBody = req.body;
        if (req.file) {
            reqBody.blog_img = req.file.filename
            // reqBody.folder = 'blog'
        } else {
            throw new Error("Blog Images Is Required....!");
        }
        const blog_name = await BlogService.Findname(reqBody.blog_name);
        if (blog_name) {
            throw new Error("blog Name Already  Added by (" + blog_name.blog_name + ") This Name  , Please Add Other Name ..")
        }
        const blog = await BlogService.CreateBlog(reqBody);
        if (!blog) {
            throw new Error(" Blog Not Created , Please try again later !...");
        }
        res.status(200).json({
            success: true,
            message: "BLog SuccessFully  created..!",
            data: blog
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//blog  list
const BlogList = async (req, res) => {
    try {
        const List = await BlogService.BlogList(req, res);
        res.status(200).json({
            success: true,
            message: "Blog  List SuucessFully Get...!",
            data: List
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//Blog id
const BlogId = async (req, res) => {
    try {
        const blogId = req.params.blogId;
        const ID = await BlogService.BlogId(blogId);
        if (!ID) {
            throw new Error("BLog Data Not Found.....!");
        };
        res.status(200).json({
            success: true,
            message: "SuccessFully  BLog Data Get .....!",
            data: ID
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//update Blog
const UpdateBlog = async (req, res) => {
    try {
        const blogId = req.params.blogId;
        const ID = await BlogService.BlogId(blogId);
        if (!ID) {
            throw new Error("BLog Data Not Found.....!");
        };
        await BlogService.UpdateBLog(blogId , req.body);
        res.status(200).json({
            success :true,
            message:"SuccessFully BLog Data Updated Details...!",
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//delete Blog
const DeleteBlog = async (req,res)=>{
    try {
        const blogId = req.params.blogId;
        const ID = await BlogService.BlogId(blogId);
        if (!ID) {
            throw new Error("BLog Data Not Found.....!");
        };
       await BlogService.DeleteBlog(blogId);
       res.status(200).json({
           success :true,
           message : "SuccessFully Blog Data Deleted....!",
       });
    } catch (error) {
       res.status(400).json({ success: false, message: error.message });
    }
}

//mange Blog Status
const ManageBlogStatus = async (req, res) => {
    try {
        const blogId = req.params.blogId;
        const blog = await BlogService.ManageBlog(blogId);

        //   let message = blog.is_active ?"Blog  Data Can Enable To Show.." : "Blog Data Can Not Enable To Show..."

let message ;
        if (blog.is_active) {
            message = "Blog  Data Can Enable To Show.";
        } else {
            message = "Blog Data Can Not Enable To Show...";
        }

        res.status(200).json({
            success: true,
            message: message,
            data: blog,
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

//export the all function
module.exports = {
    CreateBlog,
    BlogList,
    BlogId,
    DeleteBlog,
    UpdateBlog,
    ManageBlogStatus
}