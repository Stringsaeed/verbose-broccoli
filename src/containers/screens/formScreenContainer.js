import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import {Text, View, StyleSheet, StatusBar} from 'react-native';
import {Button, TextInput} from 'react-native-paper';

import {addData} from '../../actions';
import {bindActionCreators} from 'redux';
// import {FormScreen} from '../../views/formScreen';

class FormScreen extends React.Component {
  constructor(props) {
    super(props);
    changeNavigationBarColor('#f2f0d8', true);
    this.state = {
      name: this.props.name,
    };
    this._handlePress = this._handlePress.bind(this);
  }

  _handlePress() {
    const {name} = this.state;
    if (name) {
      this.props.addData(name);
    }
  }

  render() {
    const {name} = this.state;
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
            onChangeText={text => {
              this.setState({name: text});
            }}
            value={name}
          />
        </View>
        <View style={styles.button}>
          <Button
            color="#f2055c"
            icon="save"
            mode="contained"
            onPress={this._handlePress}
            dark
            loading={this.props.savingIsLoading}>
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
              this.props.navigation.navigate('Products');
            }}
            dark
            color="#f2055c">
            API
          </Button>
        </View>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  name: state.form.name,
  savingIsLoading: state.form.savingIsLoading,
  savingSuccess: state.form.savingSuccess,
});

const mapDispatchToProps = dispatch => bindActionCreators({addData}, dispatch);

export const FormScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormScreen);

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
