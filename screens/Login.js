import React, { Component } from 'react';
import { View } from 'react-native';
import UserField from '../components/UserField';
import { initArrayInputs, initArrayLoginButtons } from './AuthElements';
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

  performLogIn = () => AuthStore.LogIn(this.state.mail, this.state.password);

  render() {
    const inputsArray = initArrayInputs(this.handleChangeMail, this.handleChangePass);
    const buttonsArray = initArrayLoginButtons(this.performLogIn,AuthStore.toggleAuth);
    return (
      <View>
        <UserField inputs={inputsArray} pressers={buttonsArray} />
      </View>
    );
  }
}