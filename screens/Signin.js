import React, { Component } from 'react';
import { View } from 'react-native';
import UserField from '../components/UserField';
import { initArrayInputs, initArraySigninButtons } from './AuthElements';
import AuthStore from './AuthStore';
import { observer } from 'mobx-react';

class SignIn extends Component {

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

  performSignIn = () => AuthStore.SignIn(this.state.mail, this.state.password);

  routeToLogin = () => { this.props.navigation.navigate({ routeName: 'LogIn'})};

  render() {
    const inputsArray = initArrayInputs(this.handleChangeMail, this.handleChangePass);
    const buttonsArray = initArraySigninButtons(this.performSignIn,this.routeToLogin);
    return (
      <View style={{flex: 1}}>
        <UserField inputs={inputsArray} pressers={buttonsArray} />
      </View>
    );
  }
}
export default observer(SignIn);