/* eslint-disable default-param-last */
const ADD_BOOK = './books/ADD_BOOK';
const REMOVE_BOOK = './books/REMOVE_BOOK';

// initialize book
const initState = [];

// Action Creators
export const addBook = (addbook) => ({
  type: ADD_BOOK,
  addbook,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

// Reducer
const Reducer = (state = initState, action) => {
  switch (action.type) {
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

export default Reducer;
