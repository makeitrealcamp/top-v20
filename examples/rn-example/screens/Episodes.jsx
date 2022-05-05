import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, Platform } from 'react-native';

const Episodes = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Episodes</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292929',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    flex: 1,
  },
  list: {
    flex: 3,
  },
  text: {
    color: 'white',
    fontSize: 30,
    marginBottom: 10,
  },
});

export default Episodes;
