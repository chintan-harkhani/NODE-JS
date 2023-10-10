const multer = require("multer");
const fs = require("fs");
const path = require("path");

//banner upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.fieldname == "banner_img"|| file.fieldname == "blog_img") {
            fs.mkdirSync(path.join(__dirname, "../public/Images"), {
                recursive: true,
            });
            cb(null, path.join(__dirname, "../public/Images"));
        }
        if ( file.fieldname == "blog_img") {
            fs.mkdirSync(path.join(__dirname, "../public/blog"), {
                recursive: true,
            });
            cb(null, path.join(__dirname, "../public/blog"));
        }
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        if (ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg") {
          cb("Only .png , .jpg and .jpeg format  are allowed.!");
        }
        cb(null, new Date().getTime() + ext);
      },
});

const upload = multer({
    storage: storage,
  });

  module.exports ={upload};