const { product } = require("../models");

// create products

const CreateProduct = async (reqBody) => {
    return product.create(reqBody);
}

//product lis

const ProductList = async (req, res) => {
    return product.find(
        // {$or : [{is_active : true , quantity : 1}]}
    );
}
//get product id
const ProductId = async (productId) => {
    return product.findById(productId);
}

/** Delete Product*/

const DeleteProduct = async (productId) => {
    return product.findByIdAndDelete(productId);
}

// update details
const UpdateProduct = async (productId, updateBody) => {
    return product.findByIdAndUpdate(productId, { $set: updateBody });
}
module.exports = {
    CreateProduct,
    ProductList,
    ProductId,
    DeleteProduct,
    UpdateProduct
}
