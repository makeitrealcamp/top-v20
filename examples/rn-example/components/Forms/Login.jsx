import { useEffect, useState } from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { loginRequest } from '../../services/auth';
import useAuth from '../../hooks/useAuth';

const LoginForm = ({ navigation }) => {
  const [form, setForm] = useState(null);
  const { isAuthenticated, storeData } = useAuth();

  const handleChangeText = (field, text) => {
    setForm({
      ...form,
      [field]: text,
    });
  };

  const handleSubmit = async () => {
    if (!form?.email && !form?.password) {
      Alert.alert('Error', 'Please enter your email and password');
      return;
    }

    try {
      const response = await loginRequest(form);
      const { token, profile } = await response.json();
      await storeData(token);

      navigation.navigate('Home')
    } catch (error) {
      console.log("🚀 ~ file: Login.jsx ~ line 33 ~ handleSubmit ~ error", error)
      Alert.alert('Error', 'Invalid email or password');
    }
  };

  useEffect(() => {
    console.log("🚀 ~ file: Login.jsx ~ line 45 ~ useEffect ~ isAuthenticated", isAuthenticated)
    if (isAuthenticated) {
      navigation.navigate('Home');
    }
  }, [isAuthenticated]);

  return (
    <View>
      <View>
        <Text style={styles.title}>Login Rick & Morty</Text>
      </View>
      <Text style={styles.text}>Email</Text>
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        onChangeText={(text) => handleChangeText('email', text)}
        keyboardType="email-address"
      />
      <Text style={styles.text}>Password</Text>
      <TextInput
        autoCapitalize="none"
        onChangeText={(text) => handleChangeText('password', text)}
        style={styles.input}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#BB86FC',
    fontSize: 30,
    marginBottom: 40,
  },
  text: {
    color: 'white',
    fontSize: 30,
    marginBottom: 10,
  },
  input: {
    height: 40,
    color: 'white',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    width: 300,
  },
  button: { backgroundColor: '#BB86FC', padding: 7, marginTop: 10 },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
});

export default LoginForm;
