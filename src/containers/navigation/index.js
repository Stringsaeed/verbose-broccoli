import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// import screens
import {
  SplashScreenContainer,
  FormScreenContainer,
  ConnectedProductsScreen,
  ConnectedCartScreen,
} from '../screens';

const ProductStack = createStackNavigator(
  {
    Products: {
      screen: ConnectedProductsScreen,
    },
    Cart: {
      screen: ConnectedCartScreen,
    },
  },
  {
    initialRouteName: 'Products',
    headerLayoutPreset: 'center',
  },
);

const SplashFormStack = createStackNavigator(
  {
    Splash: {
      screen: SplashScreenContainer,
    },
    Form: {
      screen: FormScreenContainer,
    },
  },
  {
    initialRouteName: 'Splash',
    headerMode: 'none',
  },
);

const RootNavigator = createSwitchNavigator(
  {
    SplashForm: {
      screen: SplashFormStack,
    },
    ProductStack: {
      screen: ProductStack,
    },
  },
  {
    initialRouteName: 'SplashForm',
    headerMode: 'none',
  },
);

export const AppContainer = createAppContainer(RootNavigator);
