const { OrderDeatilsService} = require(".././services");

// crate Order

const createOrder = async (req, res) => {
    try {
        const reqBody = req.body;

        const Order = await OrderDeatilsService.CreateOrder(reqBody);

        if (!Order) {
            throw new Error("Someting is Wrong , Please  try again later !...");
        }

        res.status(200).json({
            success: true,
            message: "Suucessfully Order Created",
            data: { Order }
        })
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

// get Order list


const OrderList = async (req, res) => {

    try {

        const getlist = await OrderDeatilsService.GetOrderList(req, res);

        res.status(200).json({
            success: true,
            message: "Data SuccessFully Get Order list .....",
            data: getlist
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

// get Order details
const getOrderDetails = async (req, res) => {
    try {
        const orderId = req.params.orderId;
        const getDetails = await OrderDeatilsService.OrderId(orderId);
        if (!getDetails) {
            throw new Error("order not found!");
        }
        res.status(200).json({
            success: true,
            message: "order details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Delete Order */
const DeleteOrder = async (req, res) => {
    try {
        const orderId = req.params.orderId;
        const orderExists = await OrderDeatilsService.OrderId(orderId);
        if (!orderExists) {
            throw new Error("Order not found!");
        }

        await OrderDeatilsService.DeleteOrder(orderId);
        res.status(200).json({
            success: true,
            message: "Order delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Order details update by id */
const updateOrderDetails = async (req, res) => {
    try {
        const orderId = req.params.orderId;
        const OrderExists = await OrderDeatilsService.OrderId(orderId);
        if (!OrderExists) {
            throw new Error("Order data not found!");
        }

        await OrderDeatilsService.UpdateOrder(orderId, req.body);

        res.status(200).json({
            success: true,
            message: "Order details update successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createOrder,
    OrderList,
    getOrderDetails,
    DeleteOrder,
    updateOrderDetails
}