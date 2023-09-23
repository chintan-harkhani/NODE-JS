const { user } = require("../models");
//create user
const Creteuser  = async (reqBody)=>{

    return user.create(reqBody)
}
//user list
const Userlist   = async(req ,res)=>{
     return user.find(
        //{$or : [{is_active : true}]}
     );
};
//get user id

const UserId = async (userId)=>{
     return user.findById(userId);
};

//delete user
const Deleteuser = async (userId)=>{
     return user.findByIdAndDelete(userId);
};
//update user
const Updateuser =  async(userId , updateBody ) =>{
  return user.findByIdAndUpdate(userId , {$set : updateBody});
};

module.exports ={
      Creteuser,
      Userlist,
      UserId,
      Deleteuser,
      Updateuser
};