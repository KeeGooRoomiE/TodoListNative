import AsyncStorage from '@react-native-community/async-storage';

export async function setAsyncStorage (key,value) {
  await AsyncStorage.setItem(key, value);
 return await AsyncStorage.getItem(key)
}