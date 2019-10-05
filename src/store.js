import {createStore, applyMiddleware, compose} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import RootReducers from './reducers';
import RootEpics from './epics';

export const configureStore = () => {
  const initialState = {};
  const epicMiddleware = createEpicMiddleware();

  const store = createStore(
    RootReducers,
    initialState,
    compose(
      applyMiddleware(epicMiddleware),
      // window.__REDUX_DEVTOOLS_EXTENSION__ &&
      //   window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
  );

  epicMiddleware.run(RootEpics);

  return store;
};
