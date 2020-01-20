import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import AuthStore from './screens/AuthStore';
import { observer } from 'mobx-react';

export default class LoadingScreen extends React.Component {
  constructor() {
    super();
    this.bootstrapAsync();
  }
  bootstrapAsync = async () => {
    this.props.navigation.navigate(AuthStore.isLoggedIn ? 'App' : 'Auth');
  }

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}