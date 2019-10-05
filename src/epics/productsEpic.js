import {ofType} from 'redux-observable';
import {switchMap} from 'rxjs/operators';

import {api} from '../utils';
import {
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
  PRODUCTS_FAILED,
} from '../constants';

export const fetchProducts = action$ =>
  action$.pipe(
    ofType(PRODUCTS_REQUEST),
    switchMap(async action => {
      try {
        const request = await api.get('/users');
        const users = await request.data;
        return {
          type: PRODUCTS_SUCCESS,
          payload: users,
        };
      } catch (e) {
        return {
          type: PRODUCTS_FAILED,
        };
      }
    }),
  );
