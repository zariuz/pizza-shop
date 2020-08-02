import { combineReducers } from 'redux';

import pizzas from './pizzas';
import cart from './cart';
import filters from './filters';

const rootReducer = combineReducers({
  pizzas,
  cart,
  filters,
});

export default rootReducer;
