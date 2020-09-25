import {ActionReducerMap} from '@ngrx/store';

import * as fromShoppingList from './shopping-list/shopping-list.reducer';
import * as fromRecipe from './recipe/recipe.reducer';
import * as fromAuth from './auth/auth.reducer';

export interface AppStateType {
  shoppingList: fromShoppingList.ShoppingListInitialStateType;
  recipe: fromRecipe.RecipeInitialStateType;
  auth: fromAuth.AuthInitialStateType;
}

export const rootReducer: ActionReducerMap<AppStateType> = {
  shoppingList: fromShoppingList.shoppingListReducer,
  recipe: fromRecipe.recipeReducer,
  auth: fromAuth.authReducer
};
