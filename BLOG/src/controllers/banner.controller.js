const {BannerService} =require("../services");

//create banner
const CreateBanner = async (req, res) => {
    try {
        const reqBody = req.body;
        if (req.file) {
            reqBody.banner_img = req.file.filename
        } else {
            throw new Error("Banner Images Is Required....!");
        }
        // const banner_name = await BannerService.Findname(reqBody.banner_name);
        // if (banner_name) {
        //     throw new Error("banner Name Already  Added by (" + banner_name.banner_name + ") This Name  , Please Add Other Name ..")
        // }
        const banner = await BannerService.CreateBanner(reqBody);
        if (!banner) {
            throw new Error(" Banner Not Created , Please try again later !...");
        }
        res.status(200).json({
            success: true,
            message: "Banner SuccessFully  created..!",
            data: banner
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//banner list
const BannerList = async (req, res) => {
    try {
        const List = await BannerService.BannerList(req, res);
        res.status(200).json({
            success: true,
            message: "Banner List SuucessFully Get...!",
            data: List,
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//gallery Id
const BannerId = async (req, res) => {
    try {
        const bannerId = req.params.bannerId;
        const ID = await BannerService.BannerId(bannerId);
        if (!ID) {
            throw new Error("Banner Data Not Found !...");
        };
        res.status(200).json({
            success: true,
            message: "SuccessFully Banner List Get....!",
            data: ID
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

// update banner
const UpdateBanner = async (req, res) => {
    try {
        const bannerId = req.params.bannerId;
        const ID = await BannerService.BannerId(bannerId);
        if (!ID) {
            throw new Error("Banner Data Not Found !...");
        };
        await BannerService.UpdateBanner(bannerId, req.body);
        res.status(200).json({
            success: true,
            message: "Banner Update update successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//delete banner
const DeleteBanner = async (req, res) => {
    try {
        const bannerId = req.params.bannerId;
        const ID = await BannerService.BannerId(bannerId);
        if (!ID) {
            throw new Error("Banner Data Not Found !...");
        };
        await BannerService.DeleteBanner(BannerId);
        res.status(200).json({
            success: true,
            message: "Suucessfully Banner images Deleted!....",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//module export
module.exports = {
    CreateBanner,
    BannerList,
    BannerId,
    DeleteBanner,
    UpdateBanner
}