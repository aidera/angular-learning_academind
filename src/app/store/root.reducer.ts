import {ActionReducerMap} from '@ngrx/store';

import * as fromShoppingList from './shopping-list/shopping-list.reducer';
import * as fromRecipe from './recipe/recipe.reducer';
import * as fromAuth from './auth/auth.reducer';

export interface State {
  shoppingList: fromShoppingList.ShoppingListInitialStateType;
  recipe: fromRecipe.RecipeInitialStateType;
  auth: fromAuth.AuthState;
}

export const rootReducer: ActionReducerMap<State> = {
  shoppingList: fromShoppingList.shoppingListReducer,
  recipe: fromRecipe.recipeReducer,
  auth: fromAuth.authReducer
};
