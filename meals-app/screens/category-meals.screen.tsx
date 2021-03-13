import React from 'react';
import { View, FlatList } from 'react-native';
import { MEALS } from '../mocks/dummy-data';
import MealItemComponent from '../components/meal-item.component';

const CategoryMealsScreen = (props: any) => {
  const categoryId = props.navigation.getParam('categoryId');
  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(categoryId) >= 0;
  });

  const navigateToMealDetails = (params: any) => {
    props.navigation.navigate({
      routeName: 'mealDetail',
      params: {
        mealId: params.id
      }
    });
  }

  const renderGridItem = (itemData: {[key: string]: any}) => {
    return <MealItemComponent itemData={itemData} onNavigate={navigateToMealDetails}/>
  }

  return (
    <View>
      <FlatList
        data={displayedMeals}
        renderItem={renderGridItem}
        numColumns={2}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData: {[key: string]: any}) => {
  let pageTitle = navigationData.navigation.getParam('categoryTitle');

  return {
    headerTitle: pageTitle
  }
};

export default CategoryMealsScreen;
