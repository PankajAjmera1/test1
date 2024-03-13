const express = require('express');
const connectDB = require('./db/database');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const shoeRoutes = require('../shoes/routes/shoes');

const app = express();
const port = 3000;

connectDB()

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(methodOverride('_method'));

app.use('/shoes', shoeRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});