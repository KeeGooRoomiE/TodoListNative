import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';
import AuthStore from './AuthStore';
import { observer } from 'mobx-react';


class LoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.bootstrapAsync();
   
    console.log("Init LoadingScreen")
    AuthStore.toogleAuthReaction(this.bootstrapAsync);
  }

  componentDidMount() {
    AuthStore.getTokenExist();
  }

  bootstrapAsync = async () => {
    const navigateAction = this.props.navigation.navigate(AuthStore.isLoggedIn ? { routeName: 'App', } : { routeName: 'Auth' });
    this.props.navigation.dispatch(navigateAction);
  }

  render() {
    console.log(this.props)
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <ActivityIndicator />
      </View>
    );
  }
}
export default observer(LoadingScreen);