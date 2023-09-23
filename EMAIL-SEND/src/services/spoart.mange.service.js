const { SpoartMangent } = require("../models");

//create spoart
const CreateSpoartmange = async (reqBody) => {
      return SpoartMangent.create(reqBody);
};
//list spoartList
const SpoartmangeList = async (req, res) => {
      return SpoartMangent.find(
            // {$or :[{is_active : true}]}
      );
};

// get spoart id

const SpoartmangeId = async (spoartmangeId) => {
      return SpoartMangent.findById(spoartmangeId);
};

//delete spoart

const DeleteSpoartmange = async (spoartmangeId) => {
      return SpoartMangent.findByIdAndDelete(spoartmangeId);
};

//update spoart

const UpdateSpoartmange = async (spoartmangeId, updateBody) => {
      return SpoartMangent.findByIdAndUpdate(spoartmangeId, { $set: updateBody });
}

module.exports = {
      CreateSpoartmange,
      SpoartmangeList,
      SpoartmangeId,
      DeleteSpoartmange,
      UpdateSpoartmange
}