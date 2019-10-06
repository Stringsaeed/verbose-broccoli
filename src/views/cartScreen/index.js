/* eslint-disable react-native/no-inline-styles */
import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';

import {HeaderIcon, List} from '../../components';

export const CartScreen = props => {
  const {data, cartData, removeProduct} = props;
  return (
    <Fragment>
      <View style={styles.container}>
        <List
          data={data}
          onPress={removeProduct}
          cardStyle={styles.card}
          itemStyle={styles.item}
          actionsViewStyle={styles.actionsView}
          actionName="Remove Item"
          cartData={cartData}
        />
      </View>
    </Fragment>
  );
};

CartScreen.navigationOptions = ({navigation}) => ({
  headerTitle: (
    <Text style={{fontWeight: 'bold', color: '#00001b', fontSize: 30}}>
      Cart
    </Text>
  ),
  headerLeft: HeaderIcon({
    iconName: 'arrow-left',
    iconSize: 25,
    left: true,
    onPress: () => {
      navigation.goBack();
    },
  }),
  headerStyle: {
    backgroundColor: '#f2f0d8',
  },
});

CartScreen.propTypes = {
  data: PropTypes.array.isRequired,
  cartData: PropTypes.arrayOf(PropTypes.object),
  removeProduct: PropTypes.func,
};

const styles = StyleSheet.create({
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
