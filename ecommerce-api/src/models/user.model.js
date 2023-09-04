const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
     {
          first_name: {
               type: String,
               trim: true,
          },
          last_name: {
               type: String,
               trim: true,
          },
          email: {
               type: String,
               trim: true,
          },
          mobile_no :{
            type : Number,
            trim : true
          },
          is_active: {
               type: Boolean,
               default: true
          },
     },
     {
          timestamps: true,
          versionKey: false
     }
);

const user = mongoose.model("Users", UserSchema);
module.exports = user;