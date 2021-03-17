import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { Icon } from '@ui-kitten/components';
import MealsNavigator from './meals-navigation';
import FavoritesStackNavigator from './favorites-navigation';
import FiltersStackNavigator from './filters-navigation';

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

const MainNavigator = createDrawerNavigator({
  mealsFavs: {
    screen: MealsTabNavigator,
    navigationOptions: {
      drawerLabel: 'Meals'
    }
  },
  filter: {
    screen: FiltersStackNavigator,
    navigationOptions: {
      drawerLabel: 'Filters'
    }
  }
}, {
  contentOptions: {
    activeTintColor: '#2F0F7A',
    labelStyle: {
      // fontFamily: 'poppins-extralight'
    }
  }
});

export default createAppContainer(MainNavigator);

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
