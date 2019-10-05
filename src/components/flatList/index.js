/* eslint-disable radix */
import React from 'react';
import PropTypes from 'prop-types';
import {Card, Avatar, Title, Paragraph, Button} from 'react-native-paper';
import {FlatList, View} from 'react-native';

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
      data={data}
      renderItem={item => {
        const addCondition = !(parseInt(item.item.id) % 2);
        const removeCondition =
          cartData && cartData.includes(parseInt(item.item.id));
        if (
          cartData
            ? addCondition && removeCondition
            : addCondition || removeCondition
        ) {
          return (
            <View style={itemStyle}>
              <Card style={cardStyle}>
                <Card.Title
                  title={item.item.name}
                  left={_props => <Avatar.Icon {..._props} icon="person" />}
                />
                <Card.Content>
                  <Title>{item.item.username}</Title>
                  <Paragraph>{item.item.email}</Paragraph>
                  <Paragraph>{item.item.phone}</Paragraph>
                </Card.Content>
                <Card.Actions style={actionsViewStyle}>
                  <Button
                    onPress={() => {
                      onPress(item.item.id);
                    }}>
                    {actionName}
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
  cartData: PropTypes.arrayOf(PropTypes.number),
};
