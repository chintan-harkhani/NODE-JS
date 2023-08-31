const { Mobile } = require("../models");

/** create mobile shoping */

const CreateMobile = async (reqBody) => {
    return Mobile.create(reqBody);
}
/** create mobile list */
const GetMobileList = async (req, res) => {
    return Mobile.find(
        // { $or: [{ is_active: false }] }
        )
};

const GetMobileId = async (mobileId) => {
    return Mobile.findById(mobileId);
};

const DeleteMobile = async (mobileId) => {
    return Mobile.findByIdAndDelete(mobileId)
};
const UpdateMobile = async (mobileId, updateBody) => {
    console.log(mobileId);
    return Mobile.findByIdAndUpdate(mobileId, { $set: updateBody })
}

const ManageMoblie = async (mobileId) => {
    const moblieExists = await GetMobileId(mobileId);
    if (!moblieExists) {
      throw new Error("Moblie not found!");
    }
  
    return Mobile.findOneAndUpdate(
      { _id: mobileId },
      {
        $set: {
          is_active:!moblieExists.is_active,
        },
      },
      { new: true }
    );
}
module.exports = {
    CreateMobile,
    GetMobileList,
    GetMobileId,
    DeleteMobile,
    UpdateMobile,
    ManageMoblie
}