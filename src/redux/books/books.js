/* eslint-disable operator-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable camelcase */
/* eslint-disable default-param-last */

const url =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/zelh2Qhasjgvb59w91ic/books';

const ADD_BOOK = './books/books/ADD_BOOK';
const REMOVE_BOOK = './books//books/REMOVE_BOOK';
const GET_BOOKS = './books/books/GET_BOOKS';

// initialize book
const initState = [];

// Reducer
const Reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return action.books;
    case ADD_BOOK:
      return [
        ...state,
        {
          ...action.addbook,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

// Action Creators
export const addBook = (book) => async (dispatch) => {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      item_id: book.id,
      title: book.title,
      author: book.author,
      category: book.category,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  dispatch({
    type: ADD_BOOK,
    book,
  });
};

export const removeBook = (id) => async (dispatch) => {
  const bookDelete = await fetch(`${url}/${id}`, { method: 'DELETE' });
  const response = await bookDelete.text();
  if (response) {
    dispatch({
      type: REMOVE_BOOK,
      id,
    });
  }
};

export const getBooks = () => async (dispatch) => {
  const response = await fetch(url);
  const data = await response.json();
  const entries = Object.entries(data);
  const books = entries.map((element) => ({
    id: element[0],
    title: Object.assign(...element[1]).title,
    author: Object.assign(...element[1]).author,
    category: Object.assign(...element[1]).category,
  }));

  dispatch({
    type: GET_BOOKS,
    books,
  });
};

export default Reducer;
