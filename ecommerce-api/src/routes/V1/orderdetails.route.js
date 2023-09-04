const express = require("express");
const { OrderDetailsController } = require("../../controllers");
const { OrderdetailsValidation } = require("../../validations");
const validate = require("../../middlewares/validate");
const routes = express.Router();

//create Order
routes.post("/create-order",
    validate(OrderdetailsValidation.CreateOrder),
    OrderDetailsController.createOrder
)
/** get Order list */
routes.get("/list",
    OrderDetailsController.OrderList
);

// get one Order  details
routes.get("/orderlist/:orderId",
    OrderDetailsController.getOrderDetails
)

/** Delete Order */
routes.delete(
    "/delete-order/:orderId",
    OrderDetailsController.DeleteOrder
);


// upadate Order details

routes.put("/update-order/:orderId",
OrderDetailsController.updateOrderDetails
)

module.exports = routes;
