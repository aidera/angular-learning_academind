import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Recipe } from '../components/recipes/recipe.model';
import {RecipeService} from '../services/recipe.service';
import { map, tap } from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable()
export class DataStorageService {

  constructor(
    private http: HttpClient,
    private recipesService: RecipeService
  ) { }

  storeRecipes(): void {
    const recipes = this.recipesService.getRecipes();
    this.http.put('https://test-9582d.firebaseio.com/recipes.json', recipes)
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>('https://test-9582d.firebaseio.com/recipes.json')
      .pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return {...recipe, ingredients: recipe.ingredients || [] };
          });
        }),
        tap(recipes => {
          this.recipesService.setRecipes(recipes);
        })
      );
  }
}
