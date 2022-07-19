/* eslint-disable default-param-last */
const ADD_BOOK = './books/ADD_BOOK';
const REMOVE_BOOK = './books/REMOVE_BOOK';

// initialize book
const initState = [
  { id: '1', title: 'Fire Man', author: 'man' },
  { id: '2', title: 'Walking Alone', author: 'walker' },
  { id: '3', title: 'Die Another', author: 'David' },
];

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
