import React, { useState } from 'react';
import BookForm from './BookForm';
import BookList from './BookList';

function Books() {
  const books = useState({ title: '', author: '' });

  return (
    <>
      <ul>
        <li>
          <button type="button">Remove</button>
        </li>
        <li>Progress</li>
        <li>More details</li>
      </ul>
      <BookList books={books} />
      <BookForm />
    </>
  );
}
export default Books;
