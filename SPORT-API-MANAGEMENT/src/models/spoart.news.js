const mongoose = require("mongoose")

const spoartnewsSchema = new mongoose.Schema(
    {
        newsCategory:{
            type : mongoose.Types.ObjectId,
            ref:"categorygame",
        },
        headline :{
            type :String,
            trim:true,
        },
        datePublished :{
             type :String,
             trim :true,
        },
        source :{
            type :String,
            trim :true,
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

const tournament = mongoose.model("turnament", spoartnewsSchema);
module.exports = tournament;