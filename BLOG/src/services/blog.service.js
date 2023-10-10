const {blog} =require("../models");

//create blog
const CreateBlog = async (reqBody)=>{
       return blog.create(reqBody)
};

//blog list
const BlogList  =async (req ,res) =>{
       return blog.find().populate("user_role" , {user_role : 1})
};

// blog id
const BlogId = async ( blogId)=>{
     return blog.findById(blogId)
};

//upadte Blog
const UpdateBLog = async (blogId , updateBody)=>{
    return blog.findByIdAndUpdate(blogId ,{ $set  : updateBody})
};

//delete blog
const DeleteBlog =async (blogId) =>{
     return blog.findByIdAndDelete (blogId)
};

//find blog
const Findname =async (blog_name) =>{
      return blog.findOne({blog_name});
}

//blog stattus mange
const ManageBlog = async (blogId) => {
    const Blog = await BlogId(blogId);
    if (!Blog) {
      throw new Error("Blog not found!");
    }
  
    return blog.findOneAndUpdate(
      { _id: blogId },
      {
        $set: {
          is_active:!Blog.is_active,
        },
      },
      { new: true }
    );
}

//module export
module.exports ={
  CreateBlog,
  BlogList,
  BlogId,
  DeleteBlog,
  UpdateBLog,
   Findname,
   ManageBlog
}