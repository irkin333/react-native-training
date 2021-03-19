import { MEALS } from '../../mocks/dummy-data';
import {IS_FAVORITE, SET_FILTERS} from '../actions/meals';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
}

const mealsReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case IS_FAVORITE:
      const mealIndex = state.favoriteMeals.findIndex((meal: any) => {
        return meal.id === action.mealId
      });
      if (mealIndex >= 0) {
        const updatedFavMeals = [ ...state.favoriteMeals ];
        updatedFavMeals.splice(mealIndex, 1);
        return {
          ...state,
          favoriteMeals: updatedFavMeals
        }
      } else {
        const favMeal = state.meals.find((meal: any) => {return meal.id === action.mealId});
        return {
          ...state, //@ts-ignore
          favoriteMeals: state.favoriteMeals.concat(favMeal)
        }
      }
    case SET_FILTERS: 
      const appliedFilters = action.filters;
      console.log(appliedFilters)
      const filteredMeals = state.meals.filter(meal => {
        if(appliedFilters.isGlutenFree && !meal.isGlutenFree) {
          return false;
        }
        if(appliedFilters.isVegan && !meal.isVegan) {
          return false;
        }
        if(appliedFilters.isVegeterian && !meal.isVegeterian) {
          return false;
        }
        if(appliedFilters.isLactoseFree && !meal.isLactoseFree) {
          return false;
        }
        return true;
      });
      console.log(filteredMeals)

      return {
        ...state,
        filteredMeals
      }
    default: 
      return state;
  }
  return state;
}

export default mealsReducers;