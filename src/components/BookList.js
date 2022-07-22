/* eslint-disable comma-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';

function BookList({ books }) {
  return (
    <ul className="book-content">
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </ul>
  );
}

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
      category: PropTypes.string,
    }).isRequired
  ).isRequired,
};

export default BookList;
