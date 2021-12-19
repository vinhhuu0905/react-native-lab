import {useReducer} from 'react';

import {myBooksData, categoriesData} from '@utils/mocks/lab6';

const initState = {
  profile: {
    userName: 'Hungpham',
    point: 200,
  },
  myBooks: myBooksData,
  categories: categoriesData,
  selectedCategory: 1,
};

const initReducer = (state, action) => {
  switch (action.payload.type) {
    case 'setProfile':
      return {...state};
    case 'setSelectedCategory':
      return {...state, selectedCategory: action.payload.selected};
    default:
      break;
  }
};

export const useModels = () => {
  const [state, dispatch] = useReducer(initReducer, initState);

  const selectCategories = id => {
    dispatch('setSelectedCategory', {payload: {selected: id}});
  };
  return {
    state,
    dispatch,
    selectCategories,
  };
};
