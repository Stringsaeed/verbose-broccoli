import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {View, Animated, StatusBar} from 'react-native';

export const SplashScreen = ({
  containerStyle,
  animatedViewStyle,
  logoStyle,
  logo,
}) => {
  return (
    <Fragment>
      <StatusBar backgroundColor="#00001b" barStyle="light-content" />
      <View style={containerStyle}>
        <Animated.View style={animatedViewStyle}>
          <Animated.Image source={logo} style={logoStyle} />
        </Animated.View>
      </View>
    </Fragment>
  );
};

SplashScreen.propTypes = {
  containerStyle: PropTypes.object,
  animatedViewStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  logo: PropTypes.number,
};
