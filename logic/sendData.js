import { home_url } from './consts';
import AsyncStorage from '@react-native-community/async-storage';

export async function sendData(method = "GET", url, body = null) {
  const config = {
    method: method,
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
  }
  if (body) {
    config.body = JSON.stringify(body);
  }
  try {
    const token = await AsyncStorage.getItem("userToken");
    } catch (error) {
     const token = ""
      console.log("sendData: token",error)
    }
  return fetch(
    home_url + url + "?access_token=" + token, config
  )
    .then(serverAnswer => serverAnswer.json())
    .catch(error => console.log('error', error)
    )
}