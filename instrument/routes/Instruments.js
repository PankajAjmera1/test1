const express = require('express');
const router = express.Router();
const Instrument = require('../models/Instrument');

// Routes go here
router.get('/', async (req, res) => {
  const instruments = await Instrument.find();
  res.render('index', { instruments });
});

router.get('/new', (req, res) => {
  res.render('new');
});

router.post('/', async (req, res) => {
  const { type, brand, instrumentName, price, soundQuality } = req.body;
  const instrument = new Instrument({ type, brand, instrumentName, price, soundQuality });
  await instrument.save();
  res.redirect('/instruments');
});

router.get('/:id', async (req, res) => {
  const instrument = await Instrument.findById(req.params.id);
  res.render('show', { instrument });
});

router.get('/:id/edit', async (req, res) => {
  const instrument = await Instrument.findById(req.params.id);
  res.render('edit', { instrument });
});

router.post('/:id', async (req, res) => {
  const { type, brand, price, soundQuality } = req.body;
  await Instrument.findByIdAndUpdate(req.params.id, { type, brand, price, soundQuality });
  res.redirect('/instruments');
});

module.exports = router;
