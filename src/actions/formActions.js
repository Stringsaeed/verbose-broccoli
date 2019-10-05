import {FETCH_DATA_REQUEST, SAVE_DATA_REQUEST} from '../constants';

export const fetchData = () => ({
  type: FETCH_DATA_REQUEST,
});

export const addData = name => ({
  type: SAVE_DATA_REQUEST,
  payload: name,
});
