const { CategoryService } = require("../services");

// crate category

const createcategory = async (req, res) => {
     try {
          const reqBody = req.body;

          const category = await CategoryService.CreateCategory(reqBody);

          if (!category) {
               throw new Error("Someting is Wrong , Please  try again later !...");
          }

          res.status(200).json({
               success: true,
               message: "Data successfully add ...",
               data: { category }
          })
     }
     catch (error) {
          res.status(400).json({ success: false, message: error.message })
     }
}

//category list
const GetcategoryList = async (req, res) => {
     try {
          const GetList = await CategoryService.GetCategoryList(req, res);

          res.status(200).json({
               success: true,
               message: "SuccessFully All Category list Get.....",
               data: GetList,
          })
     } catch (error) {
          res.status(400).json({ success: false, message: error.message })
     }
}

/** delete Category list  */

const Deletecategory = async (req, res) => {
     try {
          const categoryId = req.params.categoryId;
          const categorydelete = await CategoryService.CategoryId(categoryId);
          if (!categorydelete) {
               throw new Error("Category Iteam Not Found....");
          }

          await CategoryService.DeleteCategory(categoryId);

          res.status(200).json({
               success: true,
               message: "Category Data SuccessFully Deleteded.....",
          });
     } catch (error) {
          res.status(400).json({
               success: false,
               message: error.message
          })
     }
}


/** Category details update by id */
const updateCategoryDetails = async (req, res) => {
     try {
          const categoryId = req.params.categoryId;
          const CategoryExists = await CategoryService.CategoryId(categoryId);
          if (!CategoryExists) {
               throw new Error("Category data not found!");
          }

          await CategoryService.UpdateCategory(categoryId, req.body);

          res.status(200).json({
               success: true,
               message: "Category details update successfully!"
          });
     } catch (error) {
          res.status(400).json({ success: false, message: error.message });
     }
};

// get Category details
const getCategoryDetails = async (req, res) => {
     try {
          const categoryId = req.params.categoryId
          const getDetails = await CategoryService.CategoryId(categoryId);
          if (!getDetails) {
               throw new Error("Category not found!");
          }

          res.status(200).json({
               success: true,
               message: "Category details get successfully!",
               data: getDetails,
          });
     } catch (error) {
          res.status(400).json({ success: false, message: error.message });
     }
};

module.exports = {
     createcategory,
     GetcategoryList,
     Deletecategory,
     updateCategoryDetails,
     getCategoryDetails
}