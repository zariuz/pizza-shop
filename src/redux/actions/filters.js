import { SET_SORT_BY, SET_CATEGORY } from '../actionTypes';

export const setSortBy = (type) => ({
  type: SET_SORT_BY,
  payload: type,
});

export const setCategory = (catIndex) => ({
  type: SET_CATEGORY,
  payload: catIndex,
});
