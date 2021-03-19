import React from 'react';
import MealsListComponent from '../components/meals-list.component';
import { useSelector } from 'react-redux';

const CategoryMealsScreen = (props: any) => {
  const categoryId = props.navigation.getParam('categoryId');
  const availableMeals = useSelector((state: any) => state.meals.filteredMeals);
  const displayedMeals = availableMeals.filter((meal: any) => {
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
