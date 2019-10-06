/* eslint-disable radix */
import React from 'react';
import PropTypes from 'prop-types';
import {Card, Avatar, Title, Paragraph, Button} from 'react-native-paper';
import {FlatList, View, StyleSheet} from 'react-native';

export const List = ({
  data,
  itemStyle,
  cardStyle,
  actionsViewStyle,
  onPress,
  actionName,
  cartData,
}) => {
  return (
    <FlatList
      keyExtractor={item => item.id.toString()}
      data={
        cartData
          ? cartData.map(cartItem =>
              data.find(_item => _item.id === cartItem.id),
            )
          : data
      }
      renderItem={item => {
        if (!(parseInt(item.item.id) % 2)) {
          return (
            <View style={itemStyle}>
              <Card style={cardStyle}>
                <View style={styles.view}>
                  <View style={styles.col}>
                    <Card.Title
                      title={item.item.name}
                      left={_props => <Avatar.Icon {..._props} icon="person" />}
                    />
                    <Card.Content>
                      <Title>{item.item.username}</Title>
                      <Paragraph>{item.item.email}</Paragraph>
                      <Paragraph>{item.item.phone}</Paragraph>
                    </Card.Content>
                  </View>
                  {cartData ? (
                    <View style={styles.col}>
                      <Paragraph />
                    </View>
                  ) : null}
                </View>
                <Card.Actions style={actionsViewStyle}>
                  <Button
                    onPress={() => {
                      onPress(item.item.id);
                    }}>
                    {actionName}{' '}
                    {cartData &&
                      cartData.find(
                        cartDataItem =>
                          cartDataItem.id === parseInt(item.item.id),
                      ).quantity}
                  </Button>
                </Card.Actions>
              </Card>
            </View>
          );
        }
      }}
    />
  );
};

List.propTypes = {
  onPress: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  actionName: PropTypes.string.isRequired,
  itemStyle: PropTypes.object,
  cardStyle: PropTypes.object,
  actionsViewStyle: PropTypes.object,
  cartData: PropTypes.arrayOf(PropTypes.object),
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
  },
  col: {
    flex: 1,
    flexDirection: 'row',
  },
});
