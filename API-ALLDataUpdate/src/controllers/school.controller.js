const { SchoolService } = require("../services");

// crate school

const CreateSchool = async (req, res) => {
    try {
        const reqBody = req.body;

        const school = await SchoolService.createSchool(reqBody);

        if(!school){
            throw new Error("Someting is Wrong , Please  try again later !...");
        }

        res.status(200).json({
            success: true,
            message:"Data successfully add ..." ,
            data:{school}
         })
    }
    catch(error){
        res.status(400).json({ success : false, message : error.message})
    }
}

//school list
const GetSchoolList = async (req, res) => {
    try {
         const GetList = await SchoolService.GetSchoolList(req, res);

         res.status(200).json({
              success: true,
              message: "SuccessFully All School list Get.....",
              data: GetList,
         })
    } catch (error) {
         res.status(400).json({ success: false, message: error.message })
    }
}

/** delete School list  */

const DeleteSchool = async (req, res) => {
    try {
         const schoolid = req.params.schoolid;
         const schoolIddel = await SchoolService.SchoolId(schoolid);
         if (!schoolIddel) {
              throw new Error("School Iteam Not Found....");
         }

         await SchoolService.DeleteSchool(schoolid);

         res.status(200).json({
              success: true,
              message: "School Data SuccessFully Deleteded.....",
         });
    } catch (error) {
         res.status(400).json({
              success: false,
              message: error.message
         })
    }
}
/** School details update by id */
const updateSchoolDetails = async (req, res) => {
     try {
          const schoolid = req.params.schoolid;
          const schoolExists = await SchoolService.SchoolId(schoolid);
          if (!schoolExists) {
               throw new Error("School data not found!");
          }

          await SchoolService.UpdateSchool(schoolid, req.body);

          res.status(200).json({
               success: true,
               message: "School details update successfully!"
          });
     } catch (error) {
          res.status(400).json({ success: false, message: error.message });
     }
};

// get School details
const getSchoolDetails = async (req, res) => {
     try {
         const schoolid = req.params.schoolid
         const getDetails = await SchoolService.SchoolId(schoolid);
         if (!getDetails) {
             throw new Error("School data not found!");
         }
 
         res.status(200).json({
             success: true,
             message: "School details get successfully!",
             data: getDetails,
         });
     } catch (error) {
         res.status(400).json({ success: false, message: error.message });
     }
 };
 
module.exports = {
   CreateSchool,
   GetSchoolList,
   DeleteSchool,
   updateSchoolDetails,
   getSchoolDetails
}