// src/components/BookList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook } from '../store/bookSlice';

const BookList = ({ setEditingBook }) => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  return (
    <div>
      {books.length ? (
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <p>{book.title} by {book.author}</p>
              <button onClick={() => setEditingBook(book)}>Edit</button>
              <button onClick={() => dispatch(deleteBook(book.id))}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No books available.</p>
      )}
    </div>
  );
};

export default BookList;
