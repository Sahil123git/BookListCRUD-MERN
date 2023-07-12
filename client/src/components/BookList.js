// client/src/components/BookList.js
import React from "react";
import BookItem from "./BookItem";

const BookList = ({
  books,
  fetchBooks,
  setUpdate,
  setTitle,
  setAuthor,
  setBookId,
}) => {
  return (
    <div>
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books found.</p>
      ) : (
        <ul>
          {books.map((book) => (
            <BookItem
              key={book._id}
              book={book}
              fetchBooks={fetchBooks}
              setUpdate={setUpdate}
              setTitle={setTitle}
              setAuthor={setAuthor}
              setBookId={setBookId}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
