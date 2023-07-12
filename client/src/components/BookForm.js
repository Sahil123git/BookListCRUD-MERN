// client/src/components/BookForm.js
import React from "react";
import axios from "axios";

const BookForm = ({
  fetchBooks,
  update,
  setUpdate,
  title,
  setTitle,
  author,
  setAuthor,
  bookId,
}) => {
  const handleSubmit = async (e) => {
    console.log(title, author);
    e.preventDefault();
    try {
      if (update === 1) {
        const response = await axios.put(
          `http://localhost:5000/api/books/${bookId}`,
          {
            title,
            author,
          }
        );
        setUpdate(0);
        console.log(response.data); // Optionally, handle the response data
      } else {
        const response = await axios.post("http://localhost:5000/api/books", {
          title,
          author,
        });
        console.log(response.data); // Optionally, handle the response data
      }
      fetchBooks(); // Fetch the updated list of books
      setTitle("");
      setAuthor("");
    } catch (error) {
      // console.log("Got error :<");
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">
          {update === 0 ? `Add Book` : `Update Book`}
        </button>
      </form>
    </div>
  );
};

export default BookForm;
