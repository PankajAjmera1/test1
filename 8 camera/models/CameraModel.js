const mongoose = require('mongoose');

const cameraSchema = new mongoose.Schema({
  brand: { type: String, required: true, trim: true },
  resolution: { type: String, required: true, trim: true },
  megapixels: { type: Number, required: true },
  cameraModel: { type: String, required: true, trim: true },
  price: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Camera', cameraSchema);