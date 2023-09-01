const { Hotel } = require("../models");

// create hotel

const CreateHotel = async (reqBody) => {
  return Hotel.create(reqBody);
}

/** get Hotel list  */

const GetHotelList = async (req, res) => {
  return Hotel.find(
    // { $or: [{ is_active: true,room_price: 3000 }] }
    );
}

/** Get Hotel id */
const HotelId = async (hotelid) => {
  return Hotel.findById(hotelid);
}
/** Delete Hotel */

const DeleteHotel = async (hotelid) => {
  return Hotel.findByIdAndDelete(hotelid);
}

// update details
const UpdateHotel = async (hotelid, updateBody) => {
  return Hotel.findByIdAndUpdate(hotelid, { $set: updateBody });
}

module.exports = {
  CreateHotel,
  GetHotelList,
  HotelId,
  DeleteHotel,
  UpdateHotel
}