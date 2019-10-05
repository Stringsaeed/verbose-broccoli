import React from 'react';
import {TouchableOpacity, StyleSheet, Platform} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const HeaderIcon = ({
  iconName,
  iconSize,
  iconColor,
  onPress,
  left,
  right,
}) => {
  return (
    <TouchableOpacity
      style={left ? styles.containerLeft : styles.containerRight}
      onPress={onPress}>
      <Icon name={iconName} size={iconSize} color={iconColor} />
    </TouchableOpacity>
  );
};

HeaderIcon.defaultProps = {
  iconColor: '#00001b',
  onPress: null,
};

HeaderIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
  iconSize: PropTypes.number.isRequired,
  onPress: PropTypes.func,
  iconColor: PropTypes.string,
  style: PropTypes.object,
  right: PropTypes.bool,
  left: PropTypes.bool,
};

const styles = StyleSheet.create({
  containerRight: {
    right: Platform.OS === 'ios' ? '10%' : '5%',
    paddingLeft: 10,
  },
  containerLeft: {
    left: Platform.OS === 'ios' ? '10%' : '5%',
    paddingRight: 10,
  },
});
