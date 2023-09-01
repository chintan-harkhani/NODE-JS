const mongoose = require("mongoose");

const Busschema = new mongoose.Schema(
    {
        bus_name: {
            type:String,
            trim: true,
        },
        bus_model :{
             type : String,
             trim : true,
             default : "Government"
        },
        bus_no :{
             type : String,
             trim : true,
        },
        passengername :{
             type : String,
             trim : true,
        },
        passengercontactNo :{
            type  : Number,
            trim : true,
        },
        passengeremailId :{
            type : String,
            trim : true,
        },
        seatsNo :{
              type :Number,
              trim : true,
        },
        totalAmount :{
             type : Number,
             trim : true,
        },
        date :{
             type : String,
             trim : true,
        },
        busTime :{
             type : String,
             trim : true,
        },
        status :{
             type : String,
             default : "Confirmed",
        },
        user : {
            type : mongoose.Types.ObjectId,
            ref : "Users"
        },
        is_active: {
            type: Boolean,
            default: true
        },

    },
    {
        timestamps: true,
        versionKey: false
    },
);
const Bus = mongoose.model("Bus", Busschema);
module.exports = Bus;