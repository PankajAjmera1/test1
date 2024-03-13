const express = require('express');
const router = express.Router();
const Camera = require('../models/CameraModel');

// Display all cameras
router.get('/', async (req, res) => {
  const cameras = await Camera.find();
  res.render('index', { cameras });
});

// Display form to add a new camera
router.get('/add', (req, res) => {
  res.render('add');
});

// Handle adding a new camera
router.post('/add', async (req, res) => {
  const { brand, resolution, megapixels, cameraModel, price } = req.body;
  await Camera.create({ brand, resolution, megapixels, cameraModel, price });
  res.redirect('/');
});

// Display form to edit a camera
router.get('/edit/:id', async (req, res) => {
  const camera = await Camera.findById(req.params.id);
  res.render('edit', { camera });
});

// Handle editing a camera
router.post('/edit/:id', async (req, res) => {
  const { brand, resolution, megapixels, cameraModel, price } = req.body;
  await Camera.findByIdAndUpdate(req.params.id, { brand, resolution, megapixels, cameraModel, price });
  res.redirect('/');
});

// Handle deleting a camera
router.get('/delete/:id', async (req, res) => {
  await Camera.findByIdAndDelete(req.params.id);
  res.redirect('/');
});

module.exports = router;