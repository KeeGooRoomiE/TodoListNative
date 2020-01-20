import React, { Component } from 'react';
import { View } from 'react-native';
import UserField from '../components/UserField';
import { initArrayInputs, initArrayLoginButtons } from './AuthElements';
import AuthStore from './AuthStore';
import { observer } from 'mobx-react';

class Login extends Component {

  state = {
    mail: "",
    password: "",
  }

  handleChangeMail = (event) => {
    this.setState({ mail: event})
  }

  handleChangePass = (event) => {
    this.setState({ password: event })
  }

  performLogIn = () => AuthStore.LogIn(this.state.mail, this.state.password);

  routeToSignIn = () => { this.props.navigation.navigate({ routeName: 'SignIn'})};

  render() {
    const inputsArray = initArrayInputs(this.handleChangeMail, this.handleChangePass);
    const buttonsArray = initArrayLoginButtons(this.performLogIn,this.routeToSignIn);
    return (
      <View style={{flex: 1}}>
        <UserField inputs={inputsArray} pressers={buttonsArray} />
      </View>
    );
  }
}

export default observer(Login);