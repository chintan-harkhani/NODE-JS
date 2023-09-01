const { Bus } = require("../models");

//crate bus
const createBus = async (reqBody) => {
  return Bus.create(reqBody);
}

/** get Bus list  */

const BusList = async (req, res) => {
  return Bus.find(
    // {$or :[{is_active : true ,totalAmount: 700}]}
    );
}


/** Get Bus id */
const BusId = async (busId) => {
  return Bus.findById(busId);
}

/** Delete Bus */

const DeleteBus = async (busId) => {
  return Bus.findByIdAndDelete(busId);
}

// update Bus
const UpdateBus = async (busId, updateBody) => {
  return Bus.findByIdAndUpdate(busId, { $set: updateBody });
}
module.exports = {
  createBus,
  BusList,
  BusId,
  DeleteBus,
  UpdateBus
}