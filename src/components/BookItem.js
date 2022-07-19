import React from 'react';
import PropTypes from 'prop-types';

function BookItem({ book }) {
  return (
    <ul>
      <li>
        <button type="button">Remove</button>
      </li>
      <li>{book.title}</li>
      <li>{book.author}</li>
    </ul>
  );
}

BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookItem;
