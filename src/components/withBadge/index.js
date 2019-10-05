import React from 'react';
import {Text} from 'react-native';
import IconBadge from 'react-native-icon-badge';

export const WithBadge = props => {
  return (
    <IconBadge
      MainElement={props.children}
      BadgeElement={<Text style={props.textStyle}>{props.count}</Text>}
      IconBadgeStyle={props.badgeStyle}
      Hidden={props.count === 0}
    />
  );
};
