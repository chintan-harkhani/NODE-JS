const { MobileService } = require("../services");

/** create mobile details */
const Createmobile = async (req, res) => {
    try {
        const reqBody = req.body;

        const mobile = await MobileService.CreateMobile(reqBody);
        if (!mobile) {
            throw new Error("Something went wrong, please try again or later!");
        }
        res.status(200).json({
            success: true,
            message: "Mobile Details SuucessFully Created.....",
            data: { mobile },
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}


/**   Get Mobile list  */

const Getmobilelist = async (req, res) => {
    try {
        const GetList = await MobileService.GetMobileList(req, res);

        res.status(200).json({
            success: true,
            message: "SuccessFully All Mobile list Get.....",
            data: GetList,
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}
/** delete mobile list  */

const Deletemobile = async (req, res) => {
    try {
        const mobileId = req.params.mobileId;
        const mobiledelete = await MobileService.GetMobileId(mobileId);
        if (!mobiledelete) {
            throw new Error("Moblie Iteam Not Found....");
        }

        await MobileService.DeleteMobile(mobileId);

        res.status(200).json({
            success: true,
            message: "Mobile Data SuccessFully Deleteded.....",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

// get Mobile details
const GetmobileDetails = async (req, res) => {
    try {
        const mobileId = req.params.mobileId
        const getDetails = await MobileService.GetMobileId(mobileId);
        if (!getDetails) {
            throw new Error("Mobile not found!");
        }

        res.status(200).json({
            success: true,
            message: "Moblie details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Mobile details update by id */
const updateMobileDetails = async (req, res) => {
    try {

        const mobileId = req.params.mobileId;
        const bookExists = await MobileService.GetMobileId(mobileId);
        if (!bookExists) {
            throw new Error("Moblie data not found!");
        }
        await MobileService.UpdateMobile(mobileId, req.body,);

        res.status(200).json({
            success: true,
            message: "Moblie details update successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

//mange moblie
const manageMoblie = async (req, res) => {
    try {
        const mobileId = req.params.mobileId;
        const managemoblie = await MobileService.ManageMoblie(mobileId);
      
        //   let resMessage = managemoblie.is_active ?"Moblie  Phone Can Enable To Sale.." : "Moblie Phone Can Not Enable To Sale..."

        let resMessage;
        if (managemoblie.is_active) {
            resMessage = "Moblie  Phone Can Enable To Sale..";
        } else {
            resMessage = "Moblie  Phone Can Not Enable To Sale..";
        }

        res.status(200).json({
            success: true,
            message: resMessage,
            data: managemoblie,
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};
module.exports = {
    Createmobile,
    Getmobilelist,
    Deletemobile,
    GetmobileDetails,
    updateMobileDetails,
    manageMoblie
}