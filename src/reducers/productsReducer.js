import _ from 'lodash';

import {
  PRODUCTS_SUCCESS,
  PRODUCTS_FAILED,
  PRODUCTS_REQUEST,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
} from '../constants';

const initialState = {
  products: [],
  isLoading: true,
  error: false,
  success: false,
  cartProducts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        success: true,
      };
    case PRODUCTS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case ADD_PRODUCT:
      console.log(state.cartProducts);
      return {
        ...state,
        cartProducts: state.cartProducts.find(
          itemInCart => itemInCart.id === action.payload,
        )
          ? Object.assign(
              [],
              state.cartProducts.map(item => {
                if (item.id === action.payload) {
                  return {id: action.payload, quantity: item.quantity + 1};
                }
                return item;
              }),
            )
          : [...state.cartProducts, {id: action.payload, quantity: 1}],
      };
    case REMOVE_PRODUCT:
      const removedItem = state.cartProducts.find(
        itemInCart => itemInCart.id === action.payload,
      );
      return {
        ...state,
        cartProducts:
          removedItem.quantity > 1
            ? Object.assign(
                [],
                state.cartProducts.map(item => {
                  if (item.id === action.payload) {
                    return {id: action.payload, quantity: item.quantity - 1};
                  }
                  return item;
                }),
              )
            : _.remove(
                state.cartProducts,
                _item => _item.id !== removedItem.id,
              ),
      };
    default:
      return state;
  }
};
