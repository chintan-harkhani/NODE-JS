const { TokenService } = require("../services");
const moment = require("moment");

//crete token

const CreteToken = async (req, res) => {
    try {
        const reqBody = req.body;
        // reqBody.expire_time = moment().add(10, "minutes");
        const token = await TokenService.CreteToken(reqBody);

        reqBody.token = token;

        //svae token

        const saveToken = await TokenService.saveToken(reqBody);

        res.status(200).json({
            success: true,
            message: "Token Created .... !",
            data: saveToken
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message || "Something went wrong!",
        });
        }
}
//verify token

const VerifyToken = async(req ,res)=>{
     res.status(200).json({
        success : true,
        message : "Token SuucessFully Verified !",
        data :req.user,
     });
};

module.exports = {
    CreteToken,
    VerifyToken
}