const { iteamorder } = require("../models");
//create Iteam order

const CreateIteam = async (reqBody) => {
      return iteamorder.create(reqBody)
}

//list Iteam order
const GetIteamList = async (req, res) => {
      return iteamorder.find(
            // {$or:[{is_active : true}]}
      );
};

//get Iteam order one list
const IteamId = async (iteamId) => {
      return iteamorder.findById(iteamId);
}

//Iteam order delete
const DeleteIteam = async (iteamId) => {
      return iteamorder.findByIdAndDelete(iteamId);
};

//Iteam order update
const UpdateIteam = async (iteamId, updateBody) => {
      return iteamorder.findByIdAndUpdate(iteamId, { $set: updateBody })
}



module.exports = {
 CreateIteam,
 GetIteamList,
 IteamId,
 DeleteIteam,
 UpdateIteam
}