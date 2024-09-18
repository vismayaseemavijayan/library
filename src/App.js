// src/App.js
import React, { useState } from 'react';
import AddBookForm from './components/AddBookForm';
import BookList from './components/BookList';
import EditBookForm from './components/EditBookForm';

const App = () => {
  const [editingBook, setEditingBook] = useState(null);

  return (
    <div>
      <h1>Book Management System</h1>
      {editingBook ? (
        <EditBookForm book={editingBook} setEditingBook={setEditingBook} />
      ) : (
        <AddBookForm />
      )}
      <BookList setEditingBook={setEditingBook} />
    </div>
  );
};

export default App;
