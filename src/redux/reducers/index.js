import { combineReducers } from 'redux';

import pizzasReducer from './pizzas';
import cartReducer from './cart';
import filtersReducer from './filters';

const rootReducer = combineReducers({
  pizzas: pizzasReducer,
  cart: cartReducer,
  filters: filtersReducer,
});

export default rootReducer;
