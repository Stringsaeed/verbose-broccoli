import {PRODUCTS_REQUEST, ADD_PRODUCT, REMOVE_PRODUCT} from '../constants';

export const fetchProducts = () => ({
  type: PRODUCTS_REQUEST,
});

export const addProduct = id => ({
  type: ADD_PRODUCT,
  payload: id,
});

export const removeProduct = id => ({
  type: REMOVE_PRODUCT,
  payload: id,
});
