import { observable, decorate, action, reaction } from 'mobx';
import { sendData } from '../logic/sendData';
import AsyncStorage from '@react-native-community/async-storage';
import { } from 'prop-types';

class AuthStore {

  isLoggedIn = false;
  //isNew = false;

  toogleAuthReaction = (func) => reaction(
    () => this.isLoggedIn, 
    () => {
      func();
      console.log("toogleAuthReaction...")
    })

  LogIn = (mail, pass) => {
    let body = {
      email: mail,
      password: pass
    }

    sendData("POST", "Users/login", body)
      .then(result => {
        console.log("AuthStore.Login.sendData.result: ", result)
        this.setTokenData(result.id)
      })
      .catch(error => console.log('AuthStore.Login error: ', error))
    console.log("IsLoggedIn: ", this.isLoggedIn)
  }

  LogOut = async () => {
    this.isLoggedIn = false;
    await AsyncStorage.clear();
    console.log("IsLoggedIn: ", this.isLoggedIn)
  }

  SignIn = (mail, pass) => {
    let body = {
      email: mail,
      password: pass
    }

    sendData("POST", "Users/", body)
      .then(result => { this.LogIn(mail, pass) })
      .catch(error => console.log('error', error))
  }

  setTokenData = async (token) => {
    try {
      await AsyncStorage.setItem("userToken", token);
      this.isLoggedIn = true;
      console.log(await AsyncStorage.getItem("userToken"));
    } catch (error) {
      console.log("AuthStore: setTokenData ", error)
    }
  }

  getTokenExist = async () => {
    try {
      const accessUserToken = await AsyncStorage.getItem('userToken')
      this.isLoggedIn = (accessUserToken !== null)
    } catch (error) {
      console.log("AuthStore: getTokenExist ", error)
    }
  }
}




const AuthExport = decorate(AuthStore, {
  isLoggedIn: observable,
  LogIn: action,
  SignIn: action,
  getTokenData: action,
  getTokenExist: action,
  // toogleAuthReaction: reaction
})


export default new AuthExport()