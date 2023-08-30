const { Mobile } = require("../models");

/** create mobile shoping */

const CreateMobile = async (reqBody) => {
    return Mobile.create(reqBody);
}
/** create mobile list */
const GetMobileList = async(req, res) => {
    return Mobile.find({$or : [{is_active : false}]})
};

const GetMobileId = async (mobileId) =>{
    return Mobile.findById(mobileId)
};

const DeleteMobile= async (MobileId) =>{
     return Mobile.findByIdAndDelete(MobileId)
};
const UpdateMobile = async (mobileId , updateBody)=>{
     return Mobile.findByIdAndUpdate( mobileId , { $set : updateBody})
}
module.exports = {
    CreateMobile,
    GetMobileList,
    GetMobileId,
    DeleteMobile,
    UpdateMobile
}