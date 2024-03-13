const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('../8 camera/db/database');
const cameraRoutes = require('./routes/cameraRoutes');

const app = express();
const port = 3000;

// Connect to MongoDB
connectDB();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files
app.set('view engine', 'ejs');

// Use routes
app.use('/', cameraRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
