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
      return {
        ...state,
        cartProducts: [...state.cartProducts, action.payload],
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        cartProducts: state.cartProducts.filter(
          item => item !== action.payload,
        ),
      };
    default:
      return state;
  }
};
