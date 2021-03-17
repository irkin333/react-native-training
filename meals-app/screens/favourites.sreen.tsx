import React from 'react';
import { StyleSheet } from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderBtnComponent from '../components/header/header-btn.component';
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
    headerTitle: 'Favorite meals',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderBtnComponent}>
        <Item title='Menu'
              iconName='menu-outline' 
              color='#843CDB'
              style={{
                marginLeft: 5
              }}
              onPress={() => {
                navigationData.navigation.toggleDrawer();
              }}/>
      </HeaderButtons>
    )
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