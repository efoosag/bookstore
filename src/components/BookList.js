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

BookList.propTypes = PropTypes.node.isRequired;

export default BookList;
