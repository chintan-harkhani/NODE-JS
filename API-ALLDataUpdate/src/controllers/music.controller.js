const { MusicService } = require("../services");

// crate Music

const CreateMusic = async (req, res) => {
    try {
        const reqBody = req.body;

        const Music = await MusicService.createMusic(reqBody);

        if(!Music){
            throw new Error("Someting is Wrong , Please  try again later !...");
        }

        res.status(200).json({
            success: true,
            message:"Data successfully add ..." ,
            data:{Music}
         })
    }
    catch(error){
        res.status(400).json({ success : false, message : error.message})
    }
}

//music list
const GetMusicList = async (req, res) => {
    try {
         const GetList = await MusicService.GetMusicList(req, res);

         res.status(200).json({
              success: true,
              message: "SuccessFully All Musics list Get.....",
              data: GetList,
         })
    } catch (error) {
         res.status(400).json({ success: false, message: error.message })
    }
}

/** delete Music list  */

const DeleteMusic = async (req, res) => {
    try {
         const musicid = req.params.musicid;
         const musicIddel = await MusicService.MusicId(musicid);
         if (!musicIddel) {
              throw new Error("Music Iteam Not Found....");
         }

         await MusicService.DeleteMusic(musicid);

         res.status(200).json({
              success: true,
              message: "Music Data SuccessFully Deleteded.....",
         });
    } catch (error) {
         res.status(400).json({
              success: false,
              message: error.message
         })
    }
}

/** music details update by id */
const updateMusicDetails = async (req, res) => {
     try {
          const musicid = req.params.musicid;
          const musicExists = await MusicService.MusicId(musicid);
          if (!musicExists) {
               throw new Error("Music data not found!");
          }

          await MusicService.UpdateMusic(musicid, req.body);

          res.status(200).json({
               success: true,
               message: "Music details update successfully!"
          });
     } catch (error) {
          res.status(400).json({ success: false, message: error.message });
     }
};

// get Music details
const getMusicDetails = async (req, res) => {
     try {
         const musicid = req.params.musicid
         const getDetails = await MusicService.MusicId(musicid);
         if (!getDetails) {
             throw new Error("Music not found!");
         }
 
         res.status(200).json({
             success: true,
             message: "Music details get successfully!",
             data: getDetails,
         });
     } catch (error) {
         res.status(400).json({ success: false, message: error.message });
     }
 };
 
module.exports = {
    CreateMusic,
    GetMusicList,
    DeleteMusic,
    updateMusicDetails,
    getMusicDetails
}