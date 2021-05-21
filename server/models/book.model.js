const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    isbn: { type: String, required: true },
    pageCount: { type: Number, required: true },
    shortDescription: { type: String, required: true }

});

const Book = mongoose.model("books", BookSchema);
module.exports = Book
