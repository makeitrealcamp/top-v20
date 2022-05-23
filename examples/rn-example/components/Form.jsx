import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import { useState } from 'react';

const Form = (props) => {
  const{ placeHolderName } = props;
  const [form, setForm] = useState('');

  const handleChange = (field, text) => {
    setForm({
      ...form,
      [field]: text,
    });
  }

  const handleSubmit = () => {
    console.log(form);
  }

  return(
    <>
      <TextInput
        style={styles.text}
        onChangeText={(text) => handleChange('name', text)}
        placeholder={placeHolderName || 'Name'}
        placeholderTextColor="#999"
      />
      <Text>{form.name}</Text>
      <TextInput
        style={styles.text}
        onChangeText={(text) => handleChange('email', text)}
        placeholder="Email"
        keyboardType="email-address"
      />
      <Button
        title='Submit'
        onPress={handleSubmit}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
      >
        <Text>Login</Text>
      </TouchableOpacity>
    </>
  )
}

export default Form

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    textTransform: 'uppercase',
  },
});
