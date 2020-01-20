import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, StatusBar, View, Text} from 'react-native';
import Login from './screens/Login';
import SignIn from './screens/Signin';
import { observer } from 'mobx-react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoadingScreen from './screens/LoadingScreen';
import Notes from './screens/Notes';

const App: () => React$Node = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />
        <AppContainer />
    </View>
  );
};

const AppStack = createStackNavigator({ Home: Notes});
const AuthStack = createStackNavigator({ SignIn: SignIn, LogIn: Login });

const AppContainer = createAppContainer(createSwitchNavigator(
  {
    
    App: AppStack,
    Auth: AuthStack,
    AuthLoading: LoadingScreen
  },
  {
    initialRouteName: "AuthLoading",
  }
));

const styles = StyleSheet.create({
  engine: {
    position: 'absolute',
    right: 0,
  },
});

export default observer(App);