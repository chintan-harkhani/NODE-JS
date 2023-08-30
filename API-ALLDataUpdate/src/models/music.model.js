const mongoose = require("mongoose");

const MusicSchema = new mongoose.Schema(
    {
        Music_artist_name: {
            type: String,
            trim: true,
        },
        Music_artist_type: {
            type: String,
            trim: true,
            default: "Musical Performance"
        },
        Music_Event_date: {
            type: String,
            trim: true,
        },
        Music_Event_time: {
            type: String,
            trim: true,
        },
        Music_Event_address: {
            type: String,
            trim: true,
        },
        Music_Event_title: {
            type: String,
            trim: true,
            default: "Doesn't Really Matter"
        },
        Your_name: {
            type: String,
            trim: true,
        },
        Your_email :{
            type: String,
            trim: true,
        },
        your_number :{
            type: Number,
            trim: true,
        },
        Music_Event_Price :{
            type: Number,
            trim: true,
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

const Music = mongoose.model("Music", MusicSchema);
module.exports = Music;