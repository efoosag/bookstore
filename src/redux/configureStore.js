import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import Reducer from './books/books';
import ReducerCategories from './categories/categories';

const reducer = {
  books: Reducer,
  categories: ReducerCategories,
};

const store = configureStore({ reducer }, applyMiddleware(thunk));

export default store;
