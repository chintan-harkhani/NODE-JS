const { IteamOrderService} = require(".././services");

// crate iteam order

const CreateIteamOrder= async (req, res) => {
    try {
        const reqBody = req.body;

        const iteam =  await IteamOrderService.CreateIteam(reqBody);

        if (!iteam) {
            throw new Error("Someting is Wrong , Please  try again later !...");
        }

        res.status(200).json({
            success: true,
            message: "Suucessfully Iteam order Created",
            data: { iteam }
        })
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

// get iteam order list


const IteamOrderList = async (req, res) => {

    try {

        const getlist = await IteamOrderService.GetIteamList(req, res);

        res.status(200).json({
            success: true,
            message: "Data SuccessFully Get Iteam Order list .....",
            data: getlist
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

// get iteam order details
const getIteamOrderDetails = async (req, res) => {
    try {
        const iteamId = req.params.iteamId;
        const getDetails = await IteamOrderService.IteamId(iteamId);
        if (!getDetails) {
            throw new Error("Iteam Order not found!");
        }
        res.status(200).json({
            success: true,
            message: "Iteam Order details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Delete iteam order */
const deleteIteamOrder = async (req, res) => {
    try {
        const iteamId = req.params.iteamId;
        const iteamExists = await IteamOrderService.IteamId(iteamId);
        if (!iteamExists) {
            throw new Error("Iteam Order not found!");
        }

        await IteamOrderService.DeleteIteam(iteamId);
        res.status(200).json({
            success: true,
            message: "Iteam Order delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** iteam order details update by id */
const updateIteamOrder = async (req, res) => {
    try {
        const iteamId = req.params.iteamId;
        const iteamExists = await IteamOrderService.IteamId(iteamId);
        if (!iteamExists) {
            throw new Error("Iteam Order data not found!");
        }

        await IteamOrderService.UpdateIteam(iteamId, req.body);

        res.status(200).json({
            success: true,
            message: "Iteam Order details update successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
     CreateIteamOrder,
     IteamOrderList,
     getIteamOrderDetails,
      deleteIteamOrder,
      updateIteamOrder
}