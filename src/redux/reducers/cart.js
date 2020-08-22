import { reduce, map } from 'lodash';
import produce from 'immer';
import {
  ADD_PIZZA_CART,
  PLUS_CART_ITEM,
  MINUS_CART_ITEM,
  REMOVE_CART_ITEM,
  CLEAR_CART,
} from '../actionTypes';

const initialState = {
  items: {},
  totalPrice: 0,
  itemsCount: 0,
};

const cart = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ADD_PIZZA_CART:
        if (!draft.items[action.payload.id]) {
          draft.items[action.payload.id] = [];
        }
        draft.items[action.payload.id].push(action.payload);
        break;
      case PLUS_CART_ITEM:
        draft.items[action.payload].push(draft.items[action.payload][0]);
        break;
      case MINUS_CART_ITEM:
        if (draft.items[action.payload].length > 1) {
          draft.items[action.payload].shift();
        }
        break;
      case REMOVE_CART_ITEM:
        delete draft.items[action.payload];
        break;
      case CLEAR_CART:
        draft.items = {};
        draft.totalPrice = 0;
        draft.totalCount = 0;
        break;

      default:
        return state;
    }

    const result = reduce(map(draft.items), (prev, cur) => prev.concat(cur), []);
    draft.totalPrice = result.reduce((total, obj) => obj.price + total, 0);
    draft.itemsCount = result.length;
  });
};

export default cart;
