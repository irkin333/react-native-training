import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const CategoryMealsScreen = (props: any) => {
  return (
    <View style={styles.screen}>
      <Text style={{textAlign: 'center'}}>Category meals screen</Text>
      <Button title="Go to Meal Details screen" onPress={() => {
        props.navigation.navigate({routeName: 'mealDetail'});
      }} />
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

export default CategoryMealsScreen;