import {Ingredient} from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';


const initialState = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ] as Ingredient[],
  editedIngredient: null as Ingredient | null,
  editedIngredientIndex: -1
};
export type ShoppingListInitialStateType = typeof initialState;



export function shoppingListReducer(
  state = initialState,
  action: ShoppingListActions.ShoppingListActionsType
): ShoppingListInitialStateType {

  switch (action.type) {

    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };

    case ShoppingListActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload]
      };

    case ShoppingListActions.UPDATE_INGREDIENT:
      const ingredient = state.ingredients[state.editedIngredientIndex];
      const updatedIngredient = {
        ...ingredient,
        ...action.payload
      };
      const updatedIngredients = [...state.ingredients];
      if (state.editedIngredientIndex !== null) {
        updatedIngredients[state.editedIngredientIndex] = updatedIngredient;
        return {
          ...state,
          ingredients: updatedIngredients,
          editedIngredientIndex: null,
          editedIngredient: null,
        };
      } else {
        return {
          ...state,
          editedIngredientIndex: null,
          editedIngredient: null,
        };
      }

    case ShoppingListActions.DELETE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.filter((ig, i) => {
          return i !== state.editedIngredientIndex;
        }),
        editedIngredientIndex: -1,
        editedIngredient: null,
      };

    case ShoppingListActions.START_EDIT:
      return {
        ...state,
        editedIngredientIndex: action.payload,
        editedIngredient: {...state.ingredients[action.payload]},
      };

    case ShoppingListActions.STOP_EDIT:
      return {
        ...state,
        editedIngredientIndex: -1,
        editedIngredient: null,
      };

    default:
      return state;
  }
}
