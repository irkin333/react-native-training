export const IS_FAVORITE = 'isFavorite';
export const SET_FILTERS = 'setFilters';

export const toggleFavorite = (id: any) => {
  return {
    type: IS_FAVORITE,
    mealId: id
  }
}

export const setFilters = (filterSettings: any) => {
  return {
    type: SET_FILTERS,
    filters: filterSettings
  }
}