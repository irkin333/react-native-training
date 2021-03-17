import { createStackNavigator } from 'react-navigation-stack';
import FilterScreen from '../screens/filters.sreen';
import { navigationOptions } from './navigation-options';

const FiltersStackNavigator = createStackNavigator({
    filter: {
      screen: FilterScreen
    },
  }, {
  initialRouteName: 'filter', //set up root screen
  defaultNavigationOptions: navigationOptions
});

export default FiltersStackNavigator;
