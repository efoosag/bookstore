import React from 'react';

function Book(book) {
  const { author, title } = book;

  return (
    <div>
      <h3>{author}</h3>
      <div>{title}</div>
    </div>
  );
}
export default Book;
