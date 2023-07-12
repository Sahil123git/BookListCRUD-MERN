// controllers/bookController.js
const Book = require("../models/Book");

// Get all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

// Create a new book
exports.createBook = async (req, res) => {
  // console.log("Called me but got error!!");
  try {
    const newBook = new Book(req.body);
    console.log(req.body.title);
    const existingBook = await Book.findOne({ title: req.body.title });
    if (existingBook) {
      return res.status(400).json({ error: "Book already exists" });
    }
    const book = await newBook.save();
    res.json(book);
  } catch (error) {
    // console.log("Then also got error");
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

// Update a book
exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(book);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

// Delete a book
exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    await Book.findByIdAndRemove(id);
    res.json({ msg: "Book deleted successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};
