/* eslint-disable default-param-last */
const STATUS = './categories/STATUS';

// initState
const initCategories = [];

const ReducerCategories = (state = initCategories, action) => {
  switch (action.type) {
    case STATUS:
      return 'Under construction';

    default:
      return state;
  }
};

export default ReducerCategories;
