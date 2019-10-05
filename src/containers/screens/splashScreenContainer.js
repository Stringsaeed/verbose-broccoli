import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {StyleSheet, Dimensions, Animated} from 'react-native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

import {fetchData} from '../../actions';
import {SplashScreen as SplashScreenView} from '../../views';

const SplashScreen = props => {
  changeNavigationBarColor('#00001b', false);
  const width = Dimensions.get('window').width;
  const logo = require('../../assets/logo.png');
  const bouncingLogo = new Animated.ValueXY({x: 0, y: -width});

  useEffect(() => {
    if (
      !props.fetchingSuccess &&
      !props.fetchingError &&
      !props.fetchingIsLoading
    ) {
      props.fetchData();
    }
    Animated.spring(bouncingLogo, {
      toValue: {x: 0, y: 0},
      duration: 300,
    }).start(() =>
      setTimeout(() => {
        if (!props.fetchingIsLoading) {
          props.navigation.navigate('Form');
        }
      }, 2000),
    );
  });

  return (
    <SplashScreenView
      containerStyle={styles.container}
      animatedViewStyle={bouncingLogo.getLayout()}
      logo={logo}
      logoStyle={styles.logo(width)}
    />
  );
};

const mapStateToProps = state => ({
  fetchingIsLoading: state.form.fetchingIsLoading,
  fetchingSuccess: state.form.fetchingSuccess,
  fetchingError: state.form.fetchingError,
});

const mapDisPatchToProps = dispatch =>
  bindActionCreators({fetchData}, dispatch);

export const SplashScreenContainer = connect(
  mapStateToProps,
  mapDisPatchToProps,
)(SplashScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00001b',
  },
  logo: width => ({
    width: width / 2,
    height: width / 2,
  }),
});
