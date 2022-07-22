import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

function BookItem({ book }) {
  const dispatch = useDispatch();
  const { id } = book;

  return (
    <ul>
      <li>
        <button type="button" onClick={() => dispatch(removeBook(id))}>
          Remove
        </button>
      </li>
      <li>{book.category}</li>
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
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookItem;
