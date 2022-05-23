import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, Text, View, Image,
  TouchableOpacity,
  Alert,
  Switch,
} from 'react-native';
import { useEffect, useState } from 'react';

import Form from './components/Form';
import DatePicker from './components/DatePicker';

function App() {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Text>Hello World 🤯</Text>
      <Form placeHolderName="Enter your Name"  />
      <Switch
        // trackColor={{ false: "#767577", true: "#81b0ff" }}
        // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        // ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <DatePicker />

      <TouchableOpacity onPress={() => Alert.alert("Alert Title",
      "My Alert Msg")}>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={styles.image}
        />
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

export default App;

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
