import { View, StyleSheet, Button } from 'react-native'

import LoginForm from '../components/Forms/Login'

const LoginScreen = ({ navigation }) => {
  return(
    <View style={styles.container}>
      <LoginForm navigation={navigation} />
      <Button title='Go Back' onPress={() => navigation.goBack()} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#292929",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 30,
    marginBottom: 10,
  },
  image: {
    height: 300,
    width: 300,
    resizeMode: "contain",
    // borderRadius: 100,
  },
  button: { backgroundColor: "#BB86FC", padding: 7, marginTop: 10 },
  buttonText: { fontSize: 20, color: "#fff" },
  thumbnail: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});


export default LoginScreen
