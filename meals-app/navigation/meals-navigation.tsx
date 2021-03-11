import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../screens/categories.screen';
import CategoryMealsScreen from '../screens/category-meals.screen';
import MealDetailScreen from '../screens/meal-detail.sreen';

const MealsNavigator = createStackNavigator({
  categories: CategoriesScreen,
  categoryMeals: {
    screen: CategoryMealsScreen
  },
  mealDetail: MealDetailScreen
});

export default createAppContainer(MealsNavigator);

//*** navigation via props in the component ***

// props.navigation.navigate({routeName: 'categoryMeals'}); //navigate to the screen
// props.navigation.push('categoryMeals'); //navigate to the screen, you can create same screen again and again, go to the same page with different content
// props.navigation.replace('categoryMeals'); //replace screen in stack
// props.navigation.goBack(); //go to the previous screen in the stack
// props.navigation.popToTop(); //go to the root screen (the first in the stack)
