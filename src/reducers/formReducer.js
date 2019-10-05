import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILED,
  SAVE_DATA_REQUEST,
  SAVE_DATA_SUCCESS,
} from '../constants';

const initialState = {
  name: '',
  fetchingIsLoading: false,
  fetchingSuccess: false,
  fetchingError: false,
  savingIsLoading: false,
  savingSuccess: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        fetchingIsLoading: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        fetchingIsLoading: false,
        fetchingSuccess: true,
        name: action.payload,
      };
    case FETCH_DATA_FAILED:
      return {
        ...state,
        fetchingIsLoading: false,
        fetchingError: true,
      };
    case SAVE_DATA_REQUEST:
      return {
        ...state,
        savingIsLoading: true,
      };
    case SAVE_DATA_SUCCESS:
      return {
        ...state,
        savingIsLoading: false,
        name: action.payload,
        savingSuccess: true,
      };
    default:
      return state;
  }
};
