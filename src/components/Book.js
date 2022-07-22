/* eslint-disable import/no-cycle */
import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { getBooks } from '../redux/books/books';
import BookList from './BookList';
import BookForm from './BookForm';

function Book() {
  const books = useSelector((state) => state.books, shallowEqual);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <div>
      <BookList books={books} />
      <BookForm />
    </div>
  );
}
export default Book;
