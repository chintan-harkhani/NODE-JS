const { Pharmacy } = require("../models");

//create Pharmacy

const createPharmacy = async (reqBody) => {
    return Pharmacy.create(reqBody);
}



/** get Pharmacy list  */

const GetPharmacyList = async (req, res) => {
    return Pharmacy.find({$or:[{is_active :true , Cource_fees : 45000}]});
  }

/** Get Pharmacy id */
  const PharmacyId = async (pharmacyid) => {
    return Pharmacy.findById(pharmacyid);
}

/** Delete Pharmacy */

const  DeletePharmacy  = async (pharmacyid) =>{
return  Pharmacy.findByIdAndDelete(pharmacyid);
}

// update details
const UpdatePharmacy = async (pharmacyid, updateBody) => {
  return Pharmacy.findByIdAndUpdate(pharmacyid, { $set: updateBody });
}
module.exports = {
    createPharmacy,
    GetPharmacyList,
    PharmacyId,
    DeletePharmacy,
    UpdatePharmacy
}