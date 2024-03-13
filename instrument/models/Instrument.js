const mongoose = require('mongoose');

const instrumentSchema = new mongoose.Schema({
  type: { type: String, required: true, trim: true },
  brand: { type: String, required: true, trim: true },
  instrumentName: { type: String, required: true, trim: true },
  price: { type: Number, required: true },
  soundQuality: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Instrument', instrumentSchema);