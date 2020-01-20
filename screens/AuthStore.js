import { observable, decorate, action } from 'mobx';
import { sendData } from '../logic/sendData';
import AsyncStorage from '@react-native-community/async-storage';
import { TouchableHighlightBase } from 'react-native';


class AuthStore {

  isLoggedIn = false;
  isNew = false;

  LogIn = (mail, pass) => {
    let body = {
      email: mail,
      password: pass
    }

    sendData("POST", "Users/login", body)
      .then(result => {
        console.log("AuthStore.Login.sendData.result: ", result)
        this.setTokenData(result.id)
        this.getTokenData(result.id)
      })
      .catch(error => console.log('AuthStore.Login error: ', error))
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
      console.log(await AsyncStorage.getItem("userToken"));
    } catch (error) {
      console.log("AuthStore: setTokenData ", error)
    }
  }

  getTokenData = async (token) => {
    try {
      const accessUserToken = await AsyncStorage.getItem('userToken')
      if (token === accessUserToken) {
        this.isLoggedIn = true;
        console.log(this.isLoggedIn)
      } else {
        this.isLoggedIn = false;
        try {
          await AsyncStorage.removeItem('userToken');
        } catch (error) {
          console.log("AuthStore: getTokenData - removeItem ", error)
        }
      }
    } catch (error) {
      console.log("AuthStore: getTokenData ", error)
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

  toggleAuth = () => {
    this.isNew = !this.isNew;
  }
}

const AuthExport = decorate(AuthStore, {
  isLoggedIn: observable,
  isNew: observable,
  LogIn: action,
  SignIn: action,
  getTokenData: action,
  getTokenExist: action,
  toggleAuth: action
})


export default new AuthExport()