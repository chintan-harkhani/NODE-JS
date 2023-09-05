const { CartIteamService } = require("../services");

// crate CartIteam

const CreateCart = async (req, res) => {
    try {
        const reqBody = req.body;

        const Exites = await CartIteamService.createCartIteam(reqBody);

        if (!Exites) {
            throw new Error("Someting is Wrong , Please  try again later !...");
        }

        res.status(200).json({
            success: true,
            message: "Data successfully add ...",
            data: { Exites }
        })
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

//CartIteam list
const CartIteamList = async (req, res) => {
    try {
        const GetList = await CartIteamService.CartiteamList(req, res);

        res.status(200).json({
            success: true,
            message: "SuccessFully All CartIteam list Get.....",
            data: GetList,
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

/** delete CartIteam list  */

const DeleteCartIteam = async (req, res) => {
    try {
        const cartId = req.params.cartId;
        const Exites = await CartIteamService.CartiteamId(cartId);
        if (!Exites) {
            throw new Error("CartIteam Iteam Not Found....");
        }

        await CartIteamService.DeleteCartIteam(cartId);

        res.status(200).json({
            success: true,
            message: " CartIteam Data SuccessFully Deleteded.....",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}


/** CartIteam details update by id */
const updateCartIteam = async (req, res) => {
    try {
        const cartId = req.params.cartId;
        const Exists = await CartIteamService.CartiteamId(cartId);
        if (!Exists) {
            throw new Error("CarIteam  data not found!");
        }

        await CartIteamService.UpdateCartiteam(cartId, req.body);

        res.status(200).json({
            success: true,
            message: "CartIteam details update successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// get CartIteam details
const getCartIteamId = async (req, res) => {
    try {
        const cartId = req.params.cartId
        const getDetails = await CartIteamService.CartiteamId(cartId);
        if (!getDetails) {
            throw new Error("Cart Iteam not found!");
        }

        res.status(200).json({
            success: true,
            message: "Cart Iteam details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    CreateCart,
    CartIteamList,
    DeleteCartIteam,
    updateCartIteam,
    getCartIteamId
}