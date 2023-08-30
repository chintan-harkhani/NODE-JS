const express = require("express");

const { MusicController } = require("../../controllers");
const { MUsicValidation } = require("../../validations");
const validate = require("../../middlewares/validate");

const routes = express.Router();

// create music
routes.post("/creat-music",
    validate(MUsicValidation.CreateMusic),
    MusicController.CreateMusic,
);

/** get music list */
routes.get("/music-list",
    MusicController.GetMusicList,

);

/**Delete music  */
routes.delete('/delete-music/:musicid',
    MusicController.DeleteMusic,
);

  // get one music details
routes.get("/musiclist/:musicid",
    MusicController.getMusicDetails
)
// upadate music details

routes.put("/update-music/:musicid",
    MusicController.updateMusicDetails
)

module.exports = routes;