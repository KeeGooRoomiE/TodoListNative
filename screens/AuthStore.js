import { observable, decorate, action } from 'mobx';
import { sendData } from '../logic/sendData';
import AsyncStorage from '@react-native-community/async-storage';


class AuthStore {

    isLoggedIn = false;

    LogIn = (mail, pass) => {
        let body = {
            email: mail,
            password: pass
        }

        sendData("POST", "Users/login", body)
            .then(result => {
                this.setTokenData(result.id)
                this.getTokenData(result.id)
            })
            .catch(error => console.log('error sendData: Login ', error))
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
        } catch (error) {
            console.log("AuthStore: setTokenData ",error)
        }
    }

    getTokenData = async (token) => {
        try {
            const accessUserToken = await AsyncStorage.getItem('userToken')
            if (token === accessUserToken) {
                this.isLoggedIn = true;
            } else {
                this.isLoggedIn = false;
                try {
                    await AsyncStorage.removeItem('userToken');
                } catch (error) {
                    console.log("AuthStore: getTokenData ",error)
                }
            }
        } catch (error) {
            console.log("AuthStore: getTokenData ",error)
        }
    }

    getTokenExist = async () => {
        try {
            const accessUserToken = await AsyncStorage.getItem('userToken')
            this.isLoggedIn === accessUserToken
        } catch (error) {
            console.log("AuthStore: getTokenExist ",error)
        }
    }
}

const AuthExport = decorate(AuthStore, {
    isLoggedIn: observable,
    LogIn: action,
    SignIn: action,
    getTokenData: action,
    getTokenExist: action
})


export default new AuthExport()