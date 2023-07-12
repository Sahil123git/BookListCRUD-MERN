// client/src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";

const App = () => {
  const [books, setBooks] = useState([]);
  const [update, setUpdate] = useState(0);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [bookId, setBookId] = useState(0);

  // Fetch all books from the API
  const fetchBooks = async () => {
    try {
      // console.log("I caused the error");
      const response = await axios.get("http://localhost:5000/api/books");
      setBooks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Book Collection Management</h1>
      <BookList
        books={books}
        fetchBooks={fetchBooks}
        setUpdate={setUpdate}
        setTitle={setTitle}
        setAuthor={setAuthor}
        setBookId={setBookId}
      />
      <BookForm
        fetchBooks={fetchBooks}
        update={update}
        setUpdate={setUpdate}
        title={title}
        setTitle={setTitle}
        author={author}
        setAuthor={setAuthor}
        bookId={bookId}
      />
    </div>
  );
};

export default App;
