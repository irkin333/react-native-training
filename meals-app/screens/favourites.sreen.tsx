import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FavouritesScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Favourites screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1, 
    justifyContent: 'center',
    alignContent: 'center'
  }
});

export default FavouritesScreen;