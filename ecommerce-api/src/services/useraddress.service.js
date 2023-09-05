const { Useraddress } = require("../models");

// create Useraddress
const createaddress = async (reqBody) => {
    return Useraddress.create(reqBody);
}

/** get Adress list  */

const AddressList = async (req, res) => {
    return Useraddress.find(
        // {$or : [{is_active : true]}
        );
}

/** Get Adress id */
const AddressId = async (addressId) => {
    return Useraddress.findById(addressId);
}

/** Delete Adress */

const DeleteAddress= async (addressId) => {
    return Useraddress.findByIdAndDelete(addressId);
}

// update Adress details
const UpdateAddress= async (addressId, updateBody) => {
    return Useraddress.findByIdAndUpdate(addressId, { $set: updateBody });
  }
module.exports = {
    createaddress,
    AddressList,
    AddressId,
    DeleteAddress,
    UpdateAddress
}