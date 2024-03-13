const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/books');

const app = express();
const port = 3000;

async function connectToMongoDB() {
    try {
      await mongoose.connect('mongodb://localhost:27017/test');
      console.log('Connected to MongoDB successfully');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error.message);
      process.exit(1); // Optionally exit the application if the database connection fails
    }
  }
  connectToMongoDB()

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', bookRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});