/**
 * React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import {SplashScreen} from './src/views/splashScreen';

const App: () => React$Node = () => {
  return (
    <React.Fragment>
      <SplashScreen />
    </React.Fragment>
  );
};

export default App;
