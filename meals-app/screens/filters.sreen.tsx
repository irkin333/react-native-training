import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FilterScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Filter screen</Text>
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

export default FilterScreen;