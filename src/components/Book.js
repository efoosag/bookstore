/* eslint-disable import/no-cycle */
import React from 'react';
import { useSelector } from 'react-redux';

import BookList from './BookList';
import BookForm from './BookForm';

function Book() {
  const books = useSelector((state) => state.Reducer);

  return (
    <div>
      <BookList books={books} />
      <BookForm />
    </div>
  );
}
export default Book;
