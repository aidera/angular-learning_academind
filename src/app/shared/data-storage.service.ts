import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import { Store } from '@ngrx/store';

import { Recipe } from '../modules/recipes/models/recipe.model';
import {RecipeService} from '../modules/recipes/services/recipe.service';
import * as fromRoot from '../store/root.reducer';
import * as RecipesActions from '../store/recipe/recipe.actions';

@Injectable()
export class DataStorageService {

  constructor(
    private http: HttpClient,
    private recipesService: RecipeService,
    private store: Store<fromRoot.AppStateType>
  ) { }

  storeRecipes(): void {
    const recipes = this.recipesService.getRecipes();
    this.http.put('https://test-9582d.firebaseio.com/recipes.json', recipes)
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchRecipes(): Observable<Recipe[]> {
      return this.http.get<Recipe[]>(
        'https://test-9582d.firebaseio.com/recipes.json'
      ).pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return {...recipe, ingredients: recipe.ingredients || [] };
          });
        }),
        tap(recipes => {
          this.store.dispatch(new RecipesActions.SetRecipes(recipes));
        })
      );
  }
}
