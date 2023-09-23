const { SpoartManageService } = require("../services");

//create spoart

const CreateSpoartManage = async (req, res) => {
    try {
        const reqBody = req.body;
        if (req.file) {
            reqBody.spoart_image = req.file.filename
        } else {
            throw new Error("Product image is required.!");
        }
        const spoart = await SpoartManageService.CreateSpoartmange(reqBody);
        if (!spoart) {
            throw new Error("Spoart Not Created , Please try again later !...");
        }
        res.status(200).json({
            success: true,
            message: "Suucessfully Spart mangement Created!...",
            data: spoart
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }

}

//Spoart list
const SpoartMangeList = async (req, res) => {
    try {
        const list = await SpoartManageService.SpoartmangeList(req, res);

        res.status(200).json({
            success: true,
            message: " Spoart Data SuccessFully Get !.....",
            data: list
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//get Spoart id

const SpoartMangeId = async (req, res) => {
    try {
        const spoartmangeId = req.params.spoartmangeId;
        const ID = await SpoartManageService.SpoartmangeId(spoartmangeId);
        if (!ID) {
            throw new Error("Spoart Not Found !...");
        };
        res.status(200).json({
            success: true,
            message: "Suucessfully Spoart List Get!....",
            data: { ID }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//delete Spoart

const DeleteSpoartMange = async (req, res) => {
    try {
        const spoartmangeId = req.params.spoartmangeId;
        const ID = await SpoartManageService.SpoartmangeId(spoartmangeId);
        if (!ID) {
            throw new Error("Spoart Not Found !...");
        };

        await SpoartManageService.DeleteSpoartmange(spoartmangeId);
        res.status(200).json({
            success: true,
            message: "Suucessfully Spoart Details Deleted!....",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//update Spoart

const UpdateSpoartMange = async (req, res) => {
    try {
        const spoartmangeId = req.params.spoartmangeId;
        const ID = await SpoartManageService.SpoartmangeId(spoartmangeId);
        if (!ID) {
            throw new Error("Spoart Not Found !...");
        };
        await SpoartManageService.UpdateSpoartmange(spoartmangeId, req.body);

        res.status(200).json({
            success: true,
            message: "Spoart details update successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

module.exports = {
    CreateSpoartManage,
    SpoartMangeList,
    SpoartMangeId,
    DeleteSpoartMange,
    UpdateSpoartMange
}