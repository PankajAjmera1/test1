const express = require('express');
const router = express.Router();
const Book = require('../models/book');

router.get('/book/new', (req, res) => {
    res.render('create');
  });


  router.post('/book', async (req, res) => {
    try {
      const { title, author, genre, publicationYear, price, bookTitle } = req.body;
      const newBook = new Book({ title, author, genre, publicationYear, price, bookTitle });
      await newBook.save();
      res.redirect('/book');
    } catch (error) {
      res.status(500).send(error.message);
    }
  });


// READ (all books)
router.get('/book', async (req, res) => {
  const books = await Book.find();
  res.render('index', { books });
});

// SHOW (single book)
router.get('/book/:id', async (req, res) => {
  const book = await Book.findById(req.params.id);
  res.render('show', { book });
});

// EDIT (show form)
router.get('/book/:id/edit', async (req, res) => {
  const book = await Book.findById(req.params.id);
  res.render('edit', { book });
});

// EDIT (update book)
router.post('/book/:id', async (req, res) => {
  try {
    const { title, author, genre, publicationYear, price } = req.body;
    await Book.findByIdAndUpdate(req.params.id, { title, author, genre, publicationYear, price });
    res.redirect(`/book/${req.params.id}`);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;