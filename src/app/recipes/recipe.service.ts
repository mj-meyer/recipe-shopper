import { Recipe } from './recipes-list/recipe.model';

export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'A test recipe description', 'https://i.ndtvimg.com/i/2018-02/chicken-recipe_620x330_81517813176.jpg'),
    new Recipe('Another Test Recipe',
      'A test recipe description that is much much longer',
      'https://i.ndtvimg.com/i/2018-02/chicken-recipe_620x330_81517813176.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}
