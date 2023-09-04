const { fashion } = require("../models");
//create fashion

const CreateFashion = async (reqBody) => {
      return fashion.create(reqBody)
}

//list fashion
const GetFashionList = async (req, res) => {
      return fashion.find(
            // {$or:[{is_active : true}]}
      );
};

const GetFashionId = async (fashionId) => {
      return fashion.findById(fashionId);
}

const DeleteFashion = async (fashionId) => {
      return fashion.findByIdAndDelete(fashionId);
};
const UpdateFashion = async (fashionId, updateBody) => {
      return fashion.findByIdAndUpdate(fashionId, { $set: updateBody })
}



module.exports = {
  CreateFashion,
  GetFashionList,
  GetFashionId,
  DeleteFashion,
  UpdateFashion
}