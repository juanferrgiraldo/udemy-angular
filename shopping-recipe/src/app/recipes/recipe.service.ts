import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a test recipe', 'https://get.pxhere.com/photo/dish-meal-food-produce-recipe-fish-breakfast-meat-pork-cuisine-steak-pork-chop-power-dishes-grilling-fried-food-604134.jpg'),
    new Recipe('Another test recipe', 'This is another test recipe', 'https://get.pxhere.com/photo/dish-meal-food-produce-recipe-fish-breakfast-meat-pork-cuisine-steak-pork-chop-power-dishes-grilling-fried-food-604134.jpg'),
  ]

  getRecipes() {
    return this.recipes.slice(); // The array is being returned by reference, so slice is used to get copy of the array
  }
}