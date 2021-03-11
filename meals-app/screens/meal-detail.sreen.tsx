import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const MealDetailScreen = (props: any) => {
  return (
    <View style={styles.screen}>
      <Text style={{textAlign: 'center'}}>Meal Detail screen</Text>
      <Button title="Go back" onPress={() => {
        props.navigation.goBack();
      }} />
      <Button title="Go back to categories" onPress={() => {
        props.navigation.popToTop();
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

export default MealDetailScreen;