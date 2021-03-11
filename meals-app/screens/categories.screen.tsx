import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { CATEGORIES } from '../mocks/dummy-data';

const CategoriesScreen = (props: any) => {
  console.log(CATEGORIES)
  const renderGridItem = (itemData: {[key: string]: any}) => {
    return (
      <View style={styles.gridItem}>
        <Text>{itemData.item.title}</Text>
      </View>
    );
  }
  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    flex: 1, 
    justifyContent: 'center',
    alignContent: 'center'
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 120
  }
});

export default CategoriesScreen;