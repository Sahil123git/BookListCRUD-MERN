// client/src/components/BookItem.js
import React from "react";
import axios from "axios";

const BookItem = ({
  book,
  fetchBooks,
  setUpdate,
  setTitle,
  setAuthor,
  setBookId,
}) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/books/${book._id}`);
      fetchBooks(); // Fetch the updated list of books after deletion
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = () => {
    setUpdate((prev) => (prev === 0 ? 1 : 0));
    setTitle(book.title);
    setAuthor(book.author);
    setBookId(book._id);
  };
  return (
    <li>
      <span>
        {book.title} by {book.author}
      </span>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleUpdate}>Update</button>
    </li>
  );
};

export default BookItem;
