import React, { Component } from 'react';
import { View,Text } from 'react-native';

export default class Notes extends Component {

  componentDidMount() {
    console.log("init Notes Screen")
  }

  render() {
    return (
      <View>
        <Text>
          Notes Sample
        </Text>
      </View>
    );
  }
}