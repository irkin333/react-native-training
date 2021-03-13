class Meal {
  public id: string;
  public categoryIds: Array<string>;
  public title: string;
  public affordability: string;
  public complexity: string;
  public imageUrl: string;
  public duration: number;
  public ingredients: Array<string>;
  public steps: Array<string>;
  public isGlutenFree: boolean;
  public isVegan: boolean;
  public isVegeterian: boolean;
  public isLactoseFree: boolean;
  public isFavorite?: boolean;

  constructor(
    id: string,
    categoryIds: Array<string>,
    title: string,
    affordability: string,
    complexity: string,
    imageUrl: string,
    duration: number,
    ingredients: Array<string>,
    steps: Array<string>,
    isGlutenFree: boolean,
    isVegan: boolean,
    isVegeterian: boolean,
    isLactoseFree: boolean
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.affordability = affordability;
    this.complexity = complexity;
    this.imageUrl = imageUrl;
    this.duration = duration;
    this.ingredients = ingredients;
    this.steps = steps;
    this.isGlutenFree = isGlutenFree;
    this.isVegan = isVegan;
    this.isVegeterian = isVegeterian;
    this.isLactoseFree = isLactoseFree;
  }
}

export default Meal;