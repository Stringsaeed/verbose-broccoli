import {ofType} from 'redux-observable';
import {switchMap} from 'rxjs/operators';
import AsyncStorage from '@react-native-community/async-storage';

import {
  SAVE_DATA_SUCCESS,
  SAVE_DATA_REQUEST,
  FETCH_DATA_REQUEST,
  FETCH_DATA_FAILED,
  FETCH_DATA_SUCCESS,
} from '../constants';

export const fetchData = action$ =>
  action$.pipe(
    ofType(FETCH_DATA_REQUEST),
    switchMap(async action => {
      try {
        const name = await AsyncStorage.getItem('@name');
        if (name !== null) {
          return {
            type: FETCH_DATA_SUCCESS,
            payload: name,
          };
        } else {
          return {
            type: FETCH_DATA_FAILED,
          };
        }
      } catch (e) {
        return {
          type: FETCH_DATA_FAILED,
        };
      }
    }),
  );

export const saveData = action$ =>
  action$.pipe(
    ofType(SAVE_DATA_REQUEST),
    switchMap(async action => {
      try {
        const success = await AsyncStorage.setItem('@name', action.payload);
        console.log(success);
        return {
          type: SAVE_DATA_SUCCESS,
          payload: action.payload,
        };
      } catch (e) {
        console.log(e);
      }
    }),
  );
