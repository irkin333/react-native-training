import React from 'react';
import { StyleSheet } from 'react-native';
import MealsListComponent from '../components/meals-list.component';
import { MEALS } from '../mocks/dummy-data';

const FavouritesScreen = (props: {[key: string]: any}) => {
  const displayedMeals = MEALS.filter((meal) => {
    return meal.isFavorite;
  });

  return (
    <MealsListComponent displayedMeals={displayedMeals} navigation={props.navigation}/>
  );
};

FavouritesScreen.navigationOptions = (navigationData: {[key: string]: any}) => {
  return {
    headerTitle: 'Favorite meals'
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FavouritesScreen;