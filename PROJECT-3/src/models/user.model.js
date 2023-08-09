const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
     {
          first_name: {
               type: String,
               trim: true,
               required: true,
          },
          last_name: {
               type: String,
               trim: true,
               required: true,
          },
          age: {
               type: Number,
               required: true,
          },
          email: {
               type: String,
               trim: true,
          },
          password: {
               type: String
          },
          role: {
               type: String
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