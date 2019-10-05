import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import {Text, View, StyleSheet, StatusBar} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

export const FormScreen = props => {
  changeNavigationBarColor('#f2f0d8', true);
  const [name, setName] = useState(props.name);

  const handlePress = () => {
    if (name) {
      props.addData(name);
    }
  };

  return (
    <Fragment>
      <StatusBar backgroundColor="#f2f0d8" barStyle="dark-content" />
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{`Welcome Mr. ${name || '...'}`}</Text>
      </View>
      <View style={styles.textInput}>
        <TextInput
          label="Name"
          mode="outlined"
          placeholder="Please Enter Your Name Here"
          onChangeText={text => setName(text)}
          value={name}
        />
      </View>
      <View style={styles.button}>
        <Button
          color="#f2055c"
          icon="save"
          mode="contained"
          onPress={handlePress}
          dark
          loading={props.savingIsLoading}>
          Confirm
        </Button>
        {/* <Snackbar visible={visible} onDismiss={() => setVisible(false)}>
          Name is saved successfully
        </Snackbar> */}
      </View>
      <View style={styles.button}>
        <Button
          mode="contained"
          onPress={() => {
            props.navigation.navigate('Products');
          }}
          dark
          color="#f2055c">
          API
        </Button>
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
  },
  textInput: {
    flex: 2,
    justifyContent: 'center',
    marginHorizontal: '5%',
    marginBottom: '10%',
  },
  button: {
    flex: 0.5,
    justifyContent: 'center',
    marginHorizontal: '10%',
    marginBottom: '5%',
  },
});
