const { orderdetails } = require("../models");
//create order

const CreateOrder = async (reqBody) => {
      return orderdetails.create(reqBody)
}

//list order
const GetOrderList = async (req, res) => {
      return orderdetails.find(
            // {$or:[{is_active : true}]}
      );
};

// list on one order
const OrderId = async (orderId) => {
      return orderdetails.findById(orderId);
}

// delete order
const DeleteOrder = async (orderId) => {
      return orderdetails.findByIdAndDelete(orderId);
};

//update order

const UpdateOrder = async (orderId, updateBody) => {
      return orderdetails.findByIdAndUpdate(orderId, { $set: updateBody })
}



module.exports = {
 CreateOrder,
 GetOrderList,
 OrderId,
 DeleteOrder,
 UpdateOrder
}