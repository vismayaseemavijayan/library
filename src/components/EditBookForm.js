// src/components/EditBookForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editBook } from '../store/bookSlice';

const EditBookForm = ({ book, setEditingBook }) => {
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editBook({ id: book.id, updatedBook: { ...book, title, author } }));
    setEditingBook(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Book Title"
        required
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author"
        required
      />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditBookForm;
