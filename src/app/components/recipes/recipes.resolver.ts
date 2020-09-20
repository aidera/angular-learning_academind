import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Recipe} from './recipe.model';
import { Observable } from 'rxjs';
import {DataStorageService} from '../../shared/data-storage.service';
import {RecipeService} from '../../services/recipe.service';

@Injectable()
export class RecipesResolver implements Resolve<Recipe[]>{

  constructor(
    private dataStorageService: DataStorageService,
    private recipeService: RecipeService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe[]> | Promise<Recipe[]> | Recipe[] {
    const recipes = this.recipeService.getRecipes();
    if (recipes.length === 0) {
      return this.dataStorageService.fetchRecipes();
    } else {
      return recipes;
    }
  }

}
