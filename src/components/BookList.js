import React from 'react';
import Book from './Book';

function BookList(books) {
  const { title, author } = books;
  return (
    <div>
      <ul>
        <li>{title}</li>
        <li>{author}</li>
      </ul>
      <Book book={(title, author)} />
    </div>
  );
}

export default BookList;
