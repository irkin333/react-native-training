import { createStackNavigator } from 'react-navigation-stack';
import FavouritesScreen from '../screens/favourites.sreen';
import MealDetailScreen from '../screens/meal-detail.sreen';
import {navigationOptions} from './navigation-options';

const FavoritesStackNavigator = createStackNavigator({
  favorites: {
    screen: FavouritesScreen
  },
  mealDetail: MealDetailScreen
}, {
  initialRouteName: 'favorites', //set up root screen
  defaultNavigationOptions: navigationOptions
});

export default FavoritesStackNavigator;
