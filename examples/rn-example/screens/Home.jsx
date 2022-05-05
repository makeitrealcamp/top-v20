import { View, Text, StyleSheet, Button } from 'react-native'

const HomeScreen = ({ navigation }) => {
  const goToDetails = () => {
    navigation.navigate('Details', {
      itemId: 86,
      title: 'React Native',
      otherParam: 'anything you want here',
    })
  }

  return(
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button title="Go to Details" onPress={goToDetails} />
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

export default HomeScreen
