import { MEALS } from '../../mocks/dummy-data';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
}

const mealsReducers = (state = initialState, action: any) => {
  return state;
}

export default mealsReducers;