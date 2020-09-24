import { Injectable } from '@angular/core';
import {Recipe} from '../models/recipe.model';
import { Ingredient } from '../../../shared/ingredient.model';
import {ShoppingListService} from '../../shopping-list/services/shopping-list.service';
import {Subject} from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Tasty Schnitzel',
  //     'A super-tasty Schnitzel - just awesome!',
  //     'https://natashaskitchen.com/wp-content/uploads/2016/02/Pork-Schnitzel-Recipe-5-500x500.jpg',
  //     [
  //       new Ingredient('Meat', 1),
  //       new Ingredient('French Fries', 20)
  //     ]
  //     ),
  //   new Recipe(
  //     'Bid Fat Burger',
  //     'What else you need to say?',
  //     'https://img.povar.ru/main/21/c8/ab/38/burger_quotcezarquot-635279.jpg',
  //     [
  //       new Ingredient('Buns', 2),
  //       new Ingredient('Meet', 1)
  //     ]
  //   ),
  // ];

  private recipes: Recipe[] = [];

  constructor(
    private shoppingListService: ShoppingListService
  ) { }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(id: number): Recipe {
    return this.recipes[id];
  }

  setRecipes(recipes: Recipe[]): void {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe): void {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe): void {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number): void {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
