import { home_url } from './consts';
import AsyncStorage from '@react-native-community/async-storage';

export async function sendData(method = "GET", url, body = null) {
  //const token = '';
  const config = {
    method: method,
    headers: { 'Content-Type': 'application/json' },
  }
  if (body) {
    config.body = JSON.stringify(body);
  }

  const token = await AsyncStorage.getItem("userToken");

  const link = token ? (home_url + url + "?access_token=" + token) : (home_url + url)

  console.log("sendData.link: ",link)
  console.log('sendData.token: ', token)
  console.log("sendData.config: ",config)
  return fetch(link, config)
    .then(serverAnswer => serverAnswer.json())
    .catch(error => {console.log('sendData.error', error); return Promise.reject(error)}
    )
}