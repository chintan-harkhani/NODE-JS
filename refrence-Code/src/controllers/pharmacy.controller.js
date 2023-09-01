const { PharmacyService } = require("../services");

// crate pharmacy

const CreatePharmacy = async (req, res) => {
    try {
        const reqBody = req.body;

        const pharmacy = await PharmacyService.createPharmacy(reqBody);

        if(!pharmacy){
            throw new Error("Someting is Wrong , Please  try again later !...");
        }

        res.status(200).json({
            success: true,
            message:"Data successfully add ..." ,
            data:{pharmacy}
         })
    }
    catch(error){
        res.status(400).json({ success : false, message : error.message})
    }
}

//pharmacy list
const GetPharmacyList = async (req, res) => {
    try {
         const GetList = await PharmacyService.GetPharmacyList(req, res);

         res.status(200).json({
              success: true,
              message: "SuccessFully All Pharmacy list Get.....",
              data: GetList,
         })
    } catch (error) {
         res.status(400).json({ success: false, message: error.message })
    }
}

/** delete Pharmacy list  */

const Deletepharmacy = async (req, res) => {
    try {
         const pharmacyid = req.params.pharmacyid;
         const pharmacyIddel = await PharmacyService.PharmacyId(pharmacyid);
         if (!pharmacyIddel) {
              throw new Error("Pharmacys Iteam Not Found....");
         }

         await PharmacyService.DeletePharmacy(pharmacyid);

         res.status(200).json({
              success: true,
              message: "Pharmacy Data SuccessFully Deleteded.....",
         });
    } catch (error) {
         res.status(400).json({
              success: false,
              message: error.message
         })
    }
}

/** Pharmacy details update by id */
const updatePharmacyDetails = async (req, res) => {
     try {
          const pharmacyid = req.params.pharmacyid;
          const pharmacyExists = await PharmacyService.PharmacyId(pharmacyid);
          if (!pharmacyExists) {
               throw new Error("Pharmacy data not found!");
          }

          await PharmacyService.UpdatePharmacy(pharmacyid, req.body);

          res.status(200).json({
               success: true,
               message: "Pharmacy details update successfully!"
          });
     } catch (error) {
          res.status(400).json({ success: false, message: error.message });
     }
};

// get Pharmacy details
const getPharmacyDetails = async (req, res) => {
     try {
         const pharmacyid = req.params.pharmacyid
         const getDetails = await PharmacyService.PharmacyId(pharmacyid);
         if (!getDetails) {
             throw new Error("Pharmacy not found!");
         }
 
         res.status(200).json({
             success: true,
             message: "Pharmacy details get successfully!",
             data: getDetails,
         });
     } catch (error) {
         res.status(400).json({ success: false, message: error.message });
     }
 };
 
module.exports = {
    CreatePharmacy,
    GetPharmacyList,
    Deletepharmacy,
    updatePharmacyDetails,
    getPharmacyDetails
}