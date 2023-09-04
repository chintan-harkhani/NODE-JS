const { Jewellery } = require("../models");

// create Jewellery
const createJewellery = async (reqBody) => {
    return Jewellery.create(reqBody);
}



/** get Jewellery list  */

const GetJewellaryList = async (req, res) => {
    return Jewellery.find(
        // {$or : [{is_active : true, Jewellery_metal : "Gold"}]}
        );
}

/** Get Jewellery id */
const JewelleryId = async (jewellaryid) => {
    return Jewellery.findById(jewellaryid);
}

/** Delete Jewellery */

const DeleteJewellary = async (jewellaryid) => {
    return Jewellery.findByIdAndDelete(jewellaryid);
}

// update details
const UpdateJewellary = async (jewellaryid, updateBody) => {
    return Jewellery.findByIdAndUpdate(jewellaryid, { $set: updateBody });
  }
module.exports = {
    createJewellery,
    GetJewellaryList,
    JewelleryId,
    DeleteJewellary,
    UpdateJewellary
}