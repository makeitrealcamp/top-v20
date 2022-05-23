import { View, Text, StyleSheet, Button } from 'react-native'

const DetailScreen = ({ route }) => {

  return(
    <View style={styles.container}>
      <Text style={styles.text}>Detail Screen </Text>
      <Text style={styles.text}>a</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292929',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
  }
})

export default DetailScreen
