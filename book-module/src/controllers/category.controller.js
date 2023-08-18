const { categoryservice } = require("../services");

// crate user

const createcategory = async (req, res) => {
    try {
        const reqBody = req.body;

        const category = await categoryservice.createCategory(reqBody);

        if(!category){
            throw new Error("Someting is Wrong , Please  try again later !...");
        }

        res.status(200).json({
            success: true,
            message:"Data successfully add ..." ,
            data:{category}
         })
    }
    catch(error){
        res.status(400).json({ success : false, message : error.message})
    }
}

module.exports = {
    createcategory
}