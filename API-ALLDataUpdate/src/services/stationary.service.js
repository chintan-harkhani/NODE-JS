const { Stationary } = require("../models");

//Stationary create

const CreateStationary = async (reqBody) => {
    return Stationary.create(reqBody);
}



/** get Stationary list  */

const GetStationaryList = async (req, res) => {
    return Stationary.find({$or: [{is_active : true, item_quantity : 6}]});
  }

/** Get Stationary id */
  const StationaryId = async (stationaryid) => {
    return Stationary.findById(stationaryid);
}

/** Delete Stationary */

const  DeleteStationary  = async (stationaryid) =>{
return  Stationary.findByIdAndDelete(stationaryid);
}

// update details
const UpdateStationary= async (stationaryid, updateBody) => {
  return Stationary.findByIdAndUpdate(stationaryid, { $set: updateBody });
}
module.exports = {
   CreateStationary,
   GetStationaryList,
   StationaryId,
   DeleteStationary,
   UpdateStationary
}