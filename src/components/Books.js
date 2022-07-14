import React from 'react';
import BookForm from './BookForm';

function Books() {
  return (
    <>
      <ul>
        <li>
          <button type="button">Remove</button>
        </li>
        <li>Progress</li>
        <li>More details</li>
      </ul>
      <BookForm />
    </>
  );
}
export default Books;
