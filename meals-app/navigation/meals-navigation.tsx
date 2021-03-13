import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import CategoriesScreen from '../screens/categories.screen';
import CategoryMealsScreen from '../screens/category-meals.screen';
import FavouritesScreen from '../screens/favourites.sreen';
import MealDetailScreen from '../screens/meal-detail.sreen';
import { Icon } from '@ui-kitten/components';
import FilterScreen from '../screens/filters.sreen';


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

const FavoritesStackNavigator = createStackNavigator({
  favorites: {
    screen: FavouritesScreen
  },
  mealDetail: MealDetailScreen
}, {
  initialRouteName: 'favorites', //set up root screen
  defaultNavigationOptions: navigationOptions
});

const MealsTabNavigator = createBottomTabNavigator({
  meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Icon name='list' fill={tabInfo.tintColor} style={{width: 22, height: 22}}/>;
      }
    }
  },
  favorites: {
    screen: FavoritesStackNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Icon name='star' fill={tabInfo.tintColor} style={{width: 22, height: 22}}/>;
      }
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: '#2F0F7A'
  }
});

const MealsDrawerNavigator = createDrawerNavigator({
  mealsFavs: {
    screen: MealsTabNavigator,
    navigationOptions: {
      
    }
  },
  filter: {
    screen: FilterScreen,
    navigationOptions: {
      
    }
  }
});

export default createAppContainer(MealsDrawerNavigator);

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
