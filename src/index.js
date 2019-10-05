/**
 * React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import {Provider} from 'react-redux';

import {configureStore} from './store';
import {AppContainer} from './containers';

const store = configureStore();

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
