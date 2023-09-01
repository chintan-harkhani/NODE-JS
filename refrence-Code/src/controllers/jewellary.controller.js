const { JewelleryService } = require("../services");

// crate jewellary

const CreateJewellery = async (req, res) => {
    try {
        const reqBody = req.body;

        const jewellary = await JewelleryService.CreateJewellery(reqBody);

        if(!jewellary){
            throw new Error("Someting is Wrong , Please  try again later !...");
        }

        res.status(200).json({
            success: true,
            message:"Data successfully add ..." ,
            data:{jewellary}
         })
    }
    catch(error){
        res.status(400).json({ success : false, message : error.message})
    }
}

//jewellary list
const GetJewellaryList = async (req, res) => {
    try {
         const GetList = await JewelleryService.GetJewellaryList(req, res);

         res.status(200).json({
              success: true,
              message: "SuccessFully All Jewellary list Get.....",
              data: GetList,
         })
    } catch (error) {
         res.status(400).json({ success: false, message: error.message })
    }
}

/** delete jewellary list  */

const DeleteJewellary = async (req, res) => {
    try {
         const jewellaryid = req.params.jewellaryid;
         const jewellarydelid = await JewelleryService.JewelleryId(jewellaryid);
         if (!jewellarydelid) {
              throw new Error("Jewellary Iteam Not Found....");
         }

         await JewelleryService.DeleteJewellary(jewellaryid);

         res.status(200).json({
              success: true,
              message: "Jewellary Data SuccessFully Deleteded.....",
         });
    } catch (error) {
         res.status(400).json({
              success: false,
              message: error.message
         })
    }
}

/** jewellary details update by id */
const updatejewellaryDetails = async (req, res) => {
     try {
          const jewellaryid = req.params.jewellaryid;
          const jewellaryExists = await JewelleryService.UpdateJewellary(jewellaryid);
          if (!jewellaryExists){
               throw new Error("Jewellary data not found!");
          }

          await JewelleryService.UpdateJewellary(jewellaryid, req.body);

          res.status(200).json({
               success: true,
               message: "Jewellary details update successfully!"
          });
     } catch (error) {
          res.status(400).json({ success: false, message: error.message });
     }
};

// get Jewellary details
const getJewellaryDetails = async (req, res) => {
     try {
         const jewellaryid = req.params.jewellaryid
         const getDetails = await JewelleryService.JewelleryId(jewellaryid);
         if (!getDetails) {
             throw new Error("Jewellary not found!");
         }
 
         res.status(200).json({
             success: true,
             message: "Jewellary details get successfully!",
             data: getDetails,
         });
     } catch (error) {
         res.status(400).json({ success: false, message: error.message });
     }
 };
 
module.exports = {
     CreateJewellery,
     GetJewellaryList,
     DeleteJewellary,
     updatejewellaryDetails,
     getJewellaryDetails
}
