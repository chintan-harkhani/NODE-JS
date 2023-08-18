const mongoose = require("mongoose");

const BookScheama = new mongoose.Schema(
    {
        book_name: {
            type: String,
            trim: true,
            required: true,
        },
        book_author: {
            type: String,
            trim: true,
            required: true,
        },
        book_description: {
            type: String,
            trim: true,
        },
        book_price: {
            type: Number,
            trim: true,
            required: true,
        },
        book_page: {
            type: Number,
            trim: true,
            required: true,
        },
        book_conditions: {
            type: String,
            trim: true,
            required: true,
        },
        is_active: {
            type : Boolean,
            default: true,
          },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Book = mongoose.model("Book_details", BookScheama);

module.exports = Book;