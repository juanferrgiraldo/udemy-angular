import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test recipe', 
      'This is a test recipe', 
      'https://get.pxhere.com/photo/dish-meal-food-produce-recipe-fish-breakfast-meat-pork-cuisine-steak-pork-chop-power-dishes-grilling-fried-food-604134.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French fries', 20)
      ]),
    new Recipe('Another test recipe', 
      'This is another test recipe', 
      'https://previews.123rf.com/images/genmike/genmike1411/genmike141100010/33951440-burger-and-french-fries.jpg',
      [
        new Ingredient('Bonus', 2),
        new Ingredient('Meat', 1)
      ]),
  ]

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice(); // The array is being returned by reference, so slice is used to get copy of the array
  }

  onAddIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipe(index:number) {
    return this.recipes[index];
  }
}