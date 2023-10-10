const {banner} =require("../models");

//create banner
const CreateBanner = async (reqBody)=>{
       return banner.create(reqBody)
};

//banner list
const BannerList  =async (req ,res) =>{
       return banner.find()
};

// banner id
const BannerId = async ( bannerId)=>{
     return banner.findById(bannerId)
};

//upadte banner
const UpdateBanner = async (bannerId , updateBody)=>{
    return banner.findByIdAndUpdate(bannerId ,{ $set  : updateBody})
};

//delete user
const DeleteBanner =async (bannerId) =>{
     return banner.findByIdAndDelete (bannerId)
};

// //find banner
// const Findname =async (banner_name) =>{
//       return banner.findOne({banner_name});
// }

//module export
module.exports ={
   CreateBanner,
   BannerList,
   BannerId,
   DeleteBanner,
   UpdateBanner,
//    Findname
}