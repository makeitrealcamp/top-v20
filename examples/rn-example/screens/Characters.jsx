import { useState, useEffect } from 'react';
import { Text, View, ScrollView, StyleSheet, FlatList, Platform } from 'react-native';

import Character from '../components/Cards/Character'

const img = 'https://rickandmortyapi.com/api/character/avatar/236.jpeg';

const Characters = () => {
  const [data, setData] = useState({
    characters: [],
    currentPage: 1,
    totalPages: 1,
  });

  const getAllCharacters = async (page = 1) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    const { results, info } = await res.json();

    setData({
      characters: [...data.characters, ...results],
      currentPage: page,
      totalPages: info.pages || 1,
    })
  }

  useEffect(() => {
    getAllCharacters(1)
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Characters</Text>
      <FlatList
        data={data.characters}
        renderItem={({ item }) => <Character {...item} />}
        keyExtractor={item => item.id}
        numColumns={2}
        ListFooterComponent={() => (
          <Text style={styles.text}>End of file</Text>
        )}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          getAllCharacters(data.currentPage + 1)
        }}
      />
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

export default Characters;
