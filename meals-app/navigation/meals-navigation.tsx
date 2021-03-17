import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../screens/categories.screen';
import CategoryMealsScreen from '../screens/category-meals.screen';
import MealDetailScreen from '../screens/meal-detail.sreen';
import {navigationOptions} from './navigation-options';

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

export default MealsNavigator;