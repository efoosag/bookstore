import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import Reducer from './books/books';
import ReducerCategories from './categories/categories';

const rootReducer = combineReducers({
  Reducer,
  ReducerCategories,
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;
