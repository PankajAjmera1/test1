const mongoose = require('mongoose');


async function connectDB() {
    try {
      await mongoose.connect('mongodb://localhost:27017/test');
      console.log('Connected to MongoDB successfully');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error.message);
      process.exit(1); // Optionally exit the application if the database connection fails
    }
  }


module.exports = connectDB;