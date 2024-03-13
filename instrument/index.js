const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const instrumentRoutes = require('../instrument/routes/Instruments');
const connectDB = require('./db/databae');

const app = express();
const port = 3001;

connectDB()

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Use routes
app.use('/instruments', instrumentRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});