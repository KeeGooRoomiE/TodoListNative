import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import Login from './screens/Login';
import SignIn from './screens/Signin';
import AuthStore from './screens/AuthStore';
import {observer} from 'mobx-react';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
       {AuthStore.isNew ? <Login/> : <SignIn/>}
      </SafeAreaView>
    </>
  );
};

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
});

const AppStack = createStackNavigator({ Home: HomeScreen});
const AuthStack = createStackNavigator({ Signin: SignIn ,Login: LogIn });

createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));

const styles = StyleSheet.create({
  engine: {
    position: 'absolute',
    right: 0,
  },
});

export default observer(App);
