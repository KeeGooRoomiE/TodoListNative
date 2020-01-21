import React, { Component } from 'react';
import { View,Text,Button } from 'react-native';
import AuthStore from './AuthStore';

export default class Notes extends Component {
  static navigationOptions = {
    title: 'Please sign in',
    headerLeft: <Button title='menu'/>,
    headerTitleAlign: 'center',
  };

  componentDidMount() {
    console.log("init Notes Screen")
  }

  render() {
    return (
      <View>
        <Text>
          Notes Sample
        </Text>
        <Button title="Logout" onPress={AuthStore.LogOut}></Button>
      </View>
    );
  }
}