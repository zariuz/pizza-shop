import produce from 'immer';
import { SET_SORT_BY, SET_CATEGORY } from '../actionTypes';

const initialState = {
  category: null,
  sortBy: 'price',
};

const filters = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case SET_SORT_BY:
        draft.sortBy = action.payload;
        break;
      case SET_CATEGORY:
        draft.category = action.payload;
        break;
      default:
        return state;
    }
  });
};

export default filters;
