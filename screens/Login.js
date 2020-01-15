import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import UserField from '../components/UserField';
import { initArrayInputs, initArrayLoginButtons } from './AuthElements';

export default class Login extends Component {

  state = {
    mail: "",
    password: "",
  }

  handleChangeMail = (event) => {
    this.setState({ mail: event.target.value })
  }

  handleChangePass = (event) => {
    this.setState({ password: event.target.value })
  }

  performLogIn = () => AuthStore.LogIn(this.state.mail, this.state.password);

  render() {
    const inputsArray = initArrayInputs(this.handleChangeMail, this.handleChangePass);
    const buttonsArray = initArrayLoginButtons(this.performLogIn);
    return (
      <View>
        <UserField inputs={inputsArray} pressers={buttonsArray} />
      </View>
    );
  }
}