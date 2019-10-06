import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import {Text, View, StyleSheet, StatusBar} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

export const FormScreen = props => {
  changeNavigationBarColor('#00001b', false);
  const {name, savingIsLoading, addData} = props;
  const [localName, setName] = useState(name);

  const handlePress = () => {
    if (localName) {
      addData(localName);
    }
  };

  return (
    <Fragment>
      <StatusBar backgroundColor="#00001b" barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{`Welcome Mr. ${localName ||
            '...'}`}</Text>
        </View>
        <View style={styles.textInput}>
          <TextInput
            label="Name"
            mode="outlined"
            placeholder="Please Enter Your Name Here"
            onChangeText={text => setName(text)}
            value={localName}
            style={styles.textInputStyle}
          />
        </View>
        <View style={styles.buttonView}>
          <Button
            labelStyle={styles.buttonLabel}
            style={styles.button}
            color="#f2055c"
            icon="save"
            mode="contained"
            onPress={handlePress}
            dark
            loading={savingIsLoading}>
            Confirm
          </Button>
        </View>
        <View style={styles.buttonView}>
          <Button
            labelStyle={styles.buttonLabel}
            style={styles.button}
            mode="contained"
            onPress={() => {
              props.navigation.navigate('Products');
            }}
            dark
            color="#f2055c">
            API
          </Button>
        </View>
      </View>
    </Fragment>
  );
};

FormScreen.propTypes = {
  addData: PropTypes.func.isRequired,
  savingIsLoading: PropTypes.bool,
  name: PropTypes.string,
};

const styles = StyleSheet.create({
  titleContainer: {
    flex: 2,
    marginTop: '5%',
    marginBottom: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#00001b',
  },
  textInput: {
    flex: 2,
    justifyContent: 'center',
    marginHorizontal: '5%',
    marginBottom: '10%',
  },
  buttonView: {
    flex: 0.5,
    justifyContent: 'center',
    marginHorizontal: '5%',
    marginBottom: '5%',
  },
  container: {
    flex: 1,
    backgroundColor: '#f2f0d8',
  },
  button: {
    elevation: 0,
  },
  textInputStyle: {
    backgroundColor: '#f2f0d8',
  },
  buttonLabel: {
    color: '#f2f0d8',
  },
});
