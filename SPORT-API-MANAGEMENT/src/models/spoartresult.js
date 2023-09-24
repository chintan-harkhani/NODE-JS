const mongoose = require("mongoose")

const resultSchema = new mongoose.Schema(
    {
    //     category :{
    //         type : mongoose.Types.ObjectId,
    //         ref :"categorygame",
    //    },
        team_category :{
             type :mongoose.Types.ObjectId,
             ref:"teamcategory",
        },
        match:{
            type:mongoose.Types.ObjectId,
            ref:"matchdetails",
        },
        turnament :{
            type :mongoose.Types.ObjectId,
            ref:"turnament",
        },
        winner_team:{
            type: String,
            trim:true,
        },
        is_active: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const result = mongoose.model("resultspoart", resultSchema);
module.exports = result;