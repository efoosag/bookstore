import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';

function BookList({ books }) {
  return (
    <ul>
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </ul>
  );
}

BookList.propTypes = {
  books: PropTypes.arrayOf(BookItem.propTypes.book).isRequired,
};

export default BookList;
