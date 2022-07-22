/* eslint-disable comma-dangle */
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

function BookForm() {
  const dispatch = useDispatch();
  let title = '';
  let author = '';
  let category = '';

  const clear = () => {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('category').value = '';
  };

  const submitBook = (e) => {
    e.preventDefault();
    if (title !== '' && author !== '') {
      dispatch(
        addBook({
          id: String(uuidv4()),
          title,
          author,
          category,
        })
      );
      clear();
    }
  };

  const handleAdd = (e) => {
    const inputName = e.target.name;
    if (inputName === 'title') {
      title = e.target.value;
    }
    if (inputName === 'author') {
      author = e.target.value;
    }
    if (inputName === 'category') {
      category = e.target.value;
    }
  };

  return (
    <div>
      <h2>Add Book</h2>
      <form>
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          onChange={handleAdd}
          id="title"
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Book Author"
          onChange={handleAdd}
          id="author"
          required
        />
        <input
          type="text"
          name="category"
          onChange={handleAdd}
          placeholder="Book category"
          id="category"
          required
        />
        <button type="submit" onClick={submitBook}>
          Add Book
        </button>
      </form>
    </div>
  );
}

export default BookForm;
