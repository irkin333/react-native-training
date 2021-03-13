import {Platform} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import CategoriesScreen from '../screens/categories.screen';
import CategoryMealsScreen from '../screens/category-meals.screen';
import MealDetailScreen from '../screens/meal-detail.sreen';

const navigationOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? '#E6BAFF' : '#ffffff'
  },
  headerTintColor: Platform.OS === 'android' ? '#2F0F7A' : '#843CDB'
}

const MealsNavigator = createStackNavigator({
  categories: {
    screen: CategoriesScreen,
    navigationOptions: {
      headerTitle: 'Meal Categories'
    }
  },
  categoryMeals: {
    screen: CategoryMealsScreen
  },
  mealDetail: MealDetailScreen
}, {
  initialRouteName: 'categories', //set up root screen
  defaultNavigationOptions: navigationOptions
});

export default createAppContainer(MealsNavigator);

//*** navigation via props in the component ***

// props.navigation.navigate({routeName: 'categoryMeals'}); //navigate to the screen
// props.navigation.push('categoryMeals'); //navigate to the screen, you can create same screen again and again, go to the same page with different content
// props.navigation.replace('categoryMeals'); //replace screen in stack
// props.navigation.goBack(); //go to the previous screen in the stack
// props.navigation.popToTop(); //go to the root screen (the first in the stack)

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import CategoriesScreen from '../screens/categories.screen';
// import CategoryMealsScreen from '../screens/category-meals.screen';

// const { Navigator, Screen } = createStackNavigator();

// const HomeNavigator = () => (
//   <Navigator headerMode='none'>
//     <Screen name='categories' component={CategoriesScreen}/>
//     <Screen name='categoryMeals' component={CategoryMealsScreen}/>
//   </Navigator>
// );

// export const MealsNavigator = () => (
//   <NavigationContainer>
//     <HomeNavigator/>
//   </NavigationContainer>
// );
