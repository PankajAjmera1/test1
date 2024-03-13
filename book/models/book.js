const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title:
     { 
        type: String, required: true, trim: true },
    author:
     {
         type: String, required: true, trim: true },
    genre:
     { 
        type: String, required: true, trim: true },
    publicationYear:
     {
         type: Number, required: true },
    bookTitle:
     {
         type: String, required: true, trim: true },
    price: 
    { 
        type: Number,
         required: true },
    
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);