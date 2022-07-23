import React from 'react';
import './Categories.css';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { categoriesStatus } from '../redux/categories/categories';

function Categories() {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{status}</p>
      <button type="button" onClick={dispatch(categoriesStatus())}>
        Categories
      </button>
    </div>
  );
}
export default Categories;
