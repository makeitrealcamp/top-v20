import React from 'react';
import { Text, View, TextInput, Switch, StyleSheet } from 'react-native';

const SearchBar = ({ title, handleChangeInput }) => {
  const [isEnabled, setIsEnabled] = React.useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.barContainer}>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          placeholder={`Search ${title}`}
          placeholderTextColor="white"
          onChangeText={handleChangeInput}
        />
      </View>
      <Text style={styles.text}>{!isEnabled ? 'By name:' : 'By type:'}</Text>
      <Switch
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    alignItems: 'center',
    marginBottom: 30,
  },
  barContainer: {
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 15,
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
});

export default SearchBar;
