const mongoose = require('mongoose');

const shoeSchema = new mongoose.Schema({
  brand: { type: String, required: true, trim: true },
  color: { type: String, required: true, trim: true },
  size: { type: Number, required: true },
  shoeModel: { type: String, required: true, trim: true },
  price: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Shoe', shoeSchema);