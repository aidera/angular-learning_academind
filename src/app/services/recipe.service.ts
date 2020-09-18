import { Injectable } from '@angular/core';
import {Recipe} from '../components/recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://natashaskitchen.com/wp-content/uploads/2016/02/Pork-Schnitzel-Recipe-5-500x500.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]
      ),
    new Recipe(
      'Bid Fat Burger',
      'What else you need to say?',
      'https://img.povar.ru/main/21/c8/ab/38/burger_quotcezarquot-635279.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meet', 1)
      ]
    ),
  ];

  constructor(
    private shoppingListService: ShoppingListService
  ) { }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(id: number): Recipe {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.shoppingListService.addIngredients(ingredients);
  }
}
