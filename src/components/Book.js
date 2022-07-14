import React from 'react';

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
