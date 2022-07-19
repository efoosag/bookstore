/* eslint-disable import/no-cycle */
import React from 'react';
// import { useSelector } from 'react-redux';
import BookList from './BookList';
import BookForm from './BookForm';

function Book() {
  const books = [
    { id: '1', title: 'sam', author: 'man' },
    { id: '2', title: 'sam', author: 'man' },
    { id: '3', title: 'sam', author: 'man' },
  ];
  return (
    <div>
      <BookList books={books} />
      <BookForm />
    </div>
  );
}
export default Book;
