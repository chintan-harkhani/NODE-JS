const express =require("express");
const {ProductController} =require("../../controllers");
const {ProductValidation} =require("../../validations")
const validate =require("../../middlewares/validate")
const routes =express.Router();


// create product
routes.post("/creat-product",
validate(ProductValidation.CreateProduct),
ProductController.createProduct
);
// get  product details
routes.get("/ProductList",
ProductController.GetProductList
)

// delete product 
routes.delete("/delete-product/:productId",
  ProductController.Deleteproduct
)

// upadate product details

routes.put("/productlist/:productId",
ProductController.updateProductDetails
)

// get one product  details
routes.get("/productlist/:productId",
ProductController.getProductDetails
)
module.exports =routes;