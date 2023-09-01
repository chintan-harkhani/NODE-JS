const { Music } = require("../models");

// create music


const createMusic = async (reqBody) => {
  return Music.create(reqBody);
}



/** get music list  */

const GetMusicList = async (req, res) => {
  return Music.find(
    // { $or: [{ is_active: true, Music_Event_date: "12 Feb 2023" }] }
    );
}

/** Get Music id */
const MusicId = async (musicid) => {
  return Music.findById(musicid);
}

/** Delete Music */

const DeleteMusic = async (musicid) => {
  return Music.findByIdAndDelete(musicid);
}
// update details
const UpdateMusic = async (musicid, updateBody) => {
  return Music.findByIdAndUpdate(musicid, { $set: updateBody });
}
module.exports = {
  createMusic,
  GetMusicList,
  MusicId,
  DeleteMusic,
  UpdateMusic
}