const express = require('express');
const router = express.Router();
const Shoe = require('../models/Shoe'); // Make sure the path matches where your Shoe model is located

// Route to display the list of all shoes
router.get('/', async (req, res) => {
  const shoes = await Shoe.find();
  res.render('index', { shoes }); // Assuming 'index.ejs' is your view file for listing shoes
});

// Route to show the form for adding a new shoe
router.get('/add', (req, res) => {
  res.render('add'); // Assuming 'add.ejs' is your view file for the form to add a new shoe
});

// Route to handle the creation of a new shoe
router.post('/', async (req, res) => {
  const { brand, color, size, shoeModel, price } = req.body;
  const shoe = new Shoe({ brand, color, size, shoeModel, price });
  await shoe.save();
  res.redirect('/shoes');
});

// Route to display a specific shoe's details
router.get('/:id', async (req, res) => {
  const shoe = await Shoe.findById(req.params.id);
  res.render('show', { shoe }); // Assuming 'show.ejs' is your view file for showing a shoe's details
});

// Route to show the form for editing an existing shoe
router.get('/:id/edit', async (req, res) => {
  const shoe = await Shoe.findById(req.params.id);
  res.render('edit', { shoe }); // Assuming 'edit.ejs' is your view file for the form to edit a shoe
});

// Route to handle the update of an existing shoe
router.post('/:id', async (req, res) => {
  const { brand, color, size, price } = req.body;
  await Shoe.findByIdAndUpdate(req.params.id, { brand, color, size, price });
  res.redirect('/shoes');
});

// Route to handle the deletion of a shoe
router.post('/:id/delete', async (req, res) => {
  await Shoe.findByIdAndDelete(req.params.id);
  res.redirect('/shoes');
});

module.exports = router;