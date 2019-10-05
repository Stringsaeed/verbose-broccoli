import {combineReducers} from 'redux';

import FormReducer from './formReducer';
import ProductsReducer from './productsReducer';

export default combineReducers({
  products: ProductsReducer,
  form: FormReducer,
});
