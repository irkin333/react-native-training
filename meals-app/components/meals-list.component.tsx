import React from 'react';
import { View, FlatList } from 'react-native';
import MealItemComponent from '../components/meal-item.component';

const MealsListComponent = (props: any) => {
  const navigateToMealDetails = (params: any) => {
    props.navigation.navigate({
      routeName: 'mealDetail',
      params: {
        mealId: params.id,
        mealTitle: params.title
      }
    });
  }

  const renderGridItem = (itemData: {[key: string]: any}) => {
    return <MealItemComponent itemData={itemData} onNavigate={navigateToMealDetails}/>
  }

  return (
    <View>
      <FlatList
        data={props.displayedMeals}
        renderItem={renderGridItem}
        numColumns={2}
      />
    </View>
  );
};

export default MealsListComponent;
