import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useAuth = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key')
      const data = jsonValue != null ? JSON.parse(jsonValue) : null;
      setAuthenticated(!!data);
    } catch(e) {
      console.error('error reading value', e)
    }
  }

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@storage_Key', jsonValue)
    } catch (e) {
      // saving error
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return {
    isAuthenticated,
    storeData,
  }
}

export default useAuth;
