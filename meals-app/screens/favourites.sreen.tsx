import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderBtnComponent from '../components/header/header-btn.component';
import MealsListComponent from '../components/meals-list.component';
import { useSelector } from 'react-redux';

const FavouritesScreen = (props: {[key: string]: any}) => {
  const favMeals = useSelector((state: any) => state.meals.favoriteMeals);

  if (!favMeals || !favMeals.length) {
    return (
      <View style={styles.text}>
        <Text>Ooops! No favorite meals yet!</Text>
      </View>
    );
  }

  return (
    <MealsListComponent displayedMeals={favMeals} navigation={props.navigation}/>
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
  text: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FavouritesScreen;