import produce from 'immer';
import { SET_PIZZAS, SET_LOADED } from '../actionTypes';

const initialState = {
  items: [],
  isLoaded: false,
};

const pizzas = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case SET_PIZZAS:
        draft.items = action.payload;
        draft.isLoaded = true;
        break;
      case SET_LOADED:
        draft.isLoaded = action.payload;
        break;
      default:
        return state;
    }
  });
};

export default pizzas;
