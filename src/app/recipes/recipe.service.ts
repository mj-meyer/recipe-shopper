import { EventEmitter } from '@angular/core';

import { Recipe } from './recipes-list/recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Cheese Burger',
      'Ground beef with cheese, bbq sauce and baby potatoes',
      'https://www.valdemarsro.dk/wp-content/2015/07/opskrift-aussie-burger.jpg',
      [new Ingredient('Meat', 3), new Ingredient('Cheese', 2), new Ingredient('Baby potatoes', 9)]
    ),
    new Recipe(
      'Steak wrap',
      'A delicious steak wrap with corn',
      'https://www.seriouseats.com/2018/08/20180806-grilled-steak-recipes-roundup-05-1500x1125.jpg',
      [new Ingredient('Meat', 1), new Ingredient('Corn', 1), new Ingredient('Wrap', 1)]
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
