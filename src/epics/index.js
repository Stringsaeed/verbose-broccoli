import {combineEpics} from 'redux-observable';

import {fetchProducts} from './productsEpic';
import {fetchData, saveData} from './formEpic';

export default combineEpics(fetchProducts, fetchData, saveData);
