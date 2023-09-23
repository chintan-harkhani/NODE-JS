const mongoose = require("mongoose");
const config = require("../config/config")


const SpoartMangemntSchema = new mongoose.Schema(
    {
        spoart_image: {
            type: String,
            trim: true,
        },
        game_name: {
            type: String,
            trim: true,
        },
        is_active: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
        toJSON: {
            transform: function (doc, data) {
                if (data?.spoart_image) {
                    data.spoart_image = `${config.base_url}spoart_images/${data.spoart_image}`;
                }
            },
        },
    },
);

const sport = mongoose.model("spoartmangement", SpoartMangemntSchema)
module.exports = sport;