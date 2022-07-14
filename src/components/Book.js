import React from 'react';
import BookList from './BookList';

function Book(props) {
  return (
    <>
      <div>
        <h3>{props.author}</h3>
        <div>{props.title}</div>
      </div>
      <BookList books={props} />
    </>
  );
}
export default Book;
