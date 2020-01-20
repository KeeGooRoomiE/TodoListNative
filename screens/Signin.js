import React, { Component } from 'react';
import { View } from 'react-native';
import UserField from '../components/UserField';
import { initArrayInputs, initArraySigninButtons } from './AuthElements';
import AuthStore from './AuthStore';

export default class Login extends Component {

  state = {
    mail: "",
    password: "",
  }

  handleChangeMail = (event) => {
    this.setState({ mail: event})
    console.log("mail event",event)
  }

  handleChangePass = (event) => {
    this.setState({ password: event })
    console.log("pass event",event)
  }

  performSignIn = () => AuthStore.SignIn(this.state.mail, this.state.password);

  render() {
    const inputsArray = initArrayInputs(this.handleChangeMail, this.handleChangePass);
    const buttonsArray = initArraySigninButtons(this.performSignIn,AuthStore.toggleAuth);
    return (
      <View>
        <UserField inputs={inputsArray} pressers={buttonsArray} />
      </View>
    );
  }
}