import { SET_LOADED, SET_PIZZAS } from '../actionTypes';
import * as api from '../../api';

export const setLoaded = (payload) => ({
  type: SET_LOADED,
  payload,
});

export const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch(setLoaded(false));

  api.getPizzas().then((data) => {
    dispatch(setPizzas(data));
  });
};

export const setPizzas = (items) => ({
  type: SET_PIZZAS,
  payload: items,
});
