import React from 'react';
import { MEALS } from '../mocks/dummy-data';
import MealsListComponent from '../components/meals-list.component';

const CategoryMealsScreen = (props: any) => {
  const categoryId = props.navigation.getParam('categoryId');
  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(categoryId) >= 0;
  });

  return (
    <MealsListComponent displayedMeals={displayedMeals} navigation={props.navigation}/>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData: {[key: string]: any}) => {
  let pageTitle = navigationData.navigation.getParam('categoryTitle');

  return {
    headerTitle: pageTitle
  }
};

export default CategoryMealsScreen;
