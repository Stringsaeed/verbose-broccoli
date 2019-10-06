/* eslint-disable react-native/no-inline-styles */
/**
 * eslint-disable react-native/no-inline-styles
 * eslint-disable react-hooks/exhaustive-deps
 * React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {WaveIndicator} from 'react-native-indicators';
import {StyleSheet, View, StatusBar, Text} from 'react-native';

import {HeaderIcon, WithBadge, List} from '../../components';

export class ProductsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetch();
  }
  componentDidMount() {
    if (this.props.cartData) {
      this.props.navigation.setParams({
        count: this.props.cartData.length,
      });
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.cartData !== this.props.cartData) {
      this.props.navigation.setParams({
        count: this.props.cartData.length,
      });
    }
  }
  render() {
    const {isLoading, data, add} = this.props;
    return (
      <Fragment>
        <StatusBar backgroundColor="#f2f0d8" barStyle="dark-content" />
        <View style={styles.container}>
          <View style={isLoading ? styles.loading : styles.listView}>
            {isLoading ? (
              <WaveIndicator color="#f2055c" />
            ) : (
              <List
                data={data}
                onPress={add}
                actionName="Add to cart"
                actionsViewStyle={styles.actionsView}
                cardStyle={styles.card}
                itemStyle={styles.item}
              />
            )}
          </View>
        </View>
      </Fragment>
    );
  }
}

ProductsScreen.navigationOptions = ({navigation}) => {
  const count = navigation.getParam('count', 0);
  return {
    headerTitle: (
      <Text style={{fontWeight: 'bold', color: '#00001b', fontSize: 30}}>
        Products
      </Text>
    ),
    headerRight: (
      <WithBadge
        count={count}
        textStyle={{color: '#FFF'}}
        badgeStyle={{color: '#f2055c', width: 15, height: 15}}>
        <HeaderIcon
          iconName="shopping-cart"
          iconSize={25}
          right={true}
          onPress={() => {
            navigation.navigate('Cart');
          }}
        />
      </WithBadge>
    ),
    headerStyle: {
      backgroundColor: '#f2f0d8',
    },
    headerBackTitle: null,
  };
};

ProductsScreen.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  fetch: PropTypes.func.isRequired,
  add: PropTypes.func.isRequired,
  cartData: PropTypes.array,
  data: PropTypes.array,
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    margin: '1.5%',
    backgroundColor: '#f2f0d8',
  },
  item: {
    marginBottom: '1.5%',
  },
  actionsView: {
    alignSelf: 'flex-end',
  },
  container: {
    flex: 1,
    backgroundColor: '#00001b',
  },
});
