import { SET_LOADED, SET_PIZZAS } from '../actionTypes';
import * as api from '../../api';

export const fetchPizzas = (category, sortBy) => (dispatch) => {
  dispatch(setLoaded(false));

  api.getPizzas(category, sortBy).then((data) => {
    dispatch(setPizzas(data));
  });
};

export const setLoaded = (payload) => ({
  type: SET_LOADED,
  payload,
});

export const setPizzas = (items) => ({
  type: SET_PIZZAS,
  payload: items,
});
