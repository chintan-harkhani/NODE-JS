const { FashionService} = require(".././services");

// crate fashion

const createFashion = async (req, res) => {
    try {
        const reqBody = req.body;

        const fashion = await FashionService.CreateFashion(reqBody);

        if (!fashion) {
            throw new Error("Someting is Wrong , Please  try again later !...");
        }

        res.status(200).json({
            success: true,
            message: "Suucessfully Fashion Created",
            data: { fashion }
        })
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

// get fashion list


const fashionList = async (req, res) => {

    try {

        const getlist = await FashionService.GetFashionList(req, res);

        res.status(200).json({
            success: true,
            message: "Data SuccessFully Get Fashion list .....",
            data: getlist
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

// get Fashion details
const getFashionDetails = async (req, res) => {
    try {
        const fashionId = req.params.fashionId;
        const getDetails = await FashionService.GetFashionId(fashionId);
        if (!getDetails) {
            throw new Error("Fashion not found!");
        }
        res.status(200).json({
            success: true,
            message: "Fashion details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Delete Fashion */
const deletefashion = async (req, res) => {
    try {
        const fashionId = req.params.fashionId;
        const FashionExists = await FashionService.GetFashionId(fashionId);
        if (!FashionExists) {
            throw new Error("Fashion not found!");
        }

        await FashionService.DeleteFashion(fashionId);
        res.status(200).json({
            success: true,
            message: "Fashion delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Fashion details update by id */
const updateFashionDetails = async (req, res) => {
    try {
        const fashionId = req.params.fashionId;
        const fashionExists = await FashionService.GetFashionId(fashionId);
        if (!fashionExists) {
            throw new Error("Fashion data not found!");
        }

        await FashionService.UpdateFashion(fashionId, req.body);

        res.status(200).json({
            success: true,
            message: "Fashion details update successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
     createFashion,
     fashionList,
     getFashionDetails,
     deletefashion,
    updateFashionDetails
}