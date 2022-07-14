import React from 'react';

function BookForm() {
  return (
    <div>
      <h2>Add Book</h2>
      <form>
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          id="title"
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Book Author"
          id="author"
          required
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default BookForm;
