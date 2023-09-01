const {Travel} = require("../models");

//create travel
const createTravel = async (reqBody) => {
    return Travel.create(reqBody);
}

/** get travel list  */

const TravelList = async (req, res) => {
    return Travel.find({$or:[{ is_active : true, Trave_type : "airline"}]});
  }

/** Get travel id */
  const TravelId = async (travelid) => {
    return Travel.findById(travelid);
}

/** Delete category */

const  DeleteTravel  = async (travelid) =>{
return  Travel.findByIdAndDelete(travelid);
}

// update details
const UpdateTravel = async (travelid, updateBody) => {
  return Travel.findByIdAndUpdate(travelid, { $set: updateBody });
}
module.exports ={
    createTravel,
    TravelList,
    TravelId,
    DeleteTravel,
    UpdateTravel
}