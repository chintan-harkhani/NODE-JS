const { ElectroniceService } = require("../services");

// crate electronice

const CreateElectronice = async (req, res) => {
    try {
        const reqBody = req.body;

        const electronice = await ElectroniceService.createElectronice(reqBody);

        if (!electronice) {
            throw new Error("Someting is Wrong , Please  try again later !...");
        }

        res.status(200).json({
            success: true,
            message: "Suucessfully electronice Created",
            data: { electronice }
        })
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}
//list in electronice
const ElectroniceList = async (req, res) => {

    try {

        const getlist = await ElectroniceService.getelectronicelist(req, res);

        res.status(200).json({
            success: true,
            message: "Data SuccessFully Get electronice list .....",
            data: getlist
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

// get electronice details
const getElectroniceDetails = async (req, res) => {
    try {
        const electroniceId = req.params.electroniceId
        const getDetails = await ElectroniceService.getElectroniceById(electroniceId);
        if (!getDetails) {
            throw new Error("electronice not found!");
        }
        res.status(200).json({
            success: true,
            message: "Electronice details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Delete electronice */
const deleteElectronice = async (req, res) => {
    try {
        const electroniceId = req.params.electroniceId;
        const Exists = await ElectroniceService.getElectroniceById(electroniceId);
        if (!Exists) {
            throw new Error("electronice not found!");
        }

        await ElectroniceService.deleteElectronice(electroniceId);
        res.status(200).json({
            success: true,
            message: "electronice delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** electronice details update by id */
const updateElectronice = async (req, res) => {
    try {
        const electroniceId = req.params.electroniceId;
        const Exists = await ElectroniceService.getElectroniceById(electroniceId);
        if (!Exists) {
            throw new Error("electronice data not found!");
        }

        await ElectroniceService.Updateelectronice(electroniceId, req.body);

        res.status(200).json({
            success: true,
            message: "electronice details update successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports ={
    CreateElectronice,
    ElectroniceList,
    getElectroniceDetails,
    deleteElectronice,
    updateElectronice
}