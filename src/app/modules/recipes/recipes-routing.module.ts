import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RecipesComponent} from './components/recipes.component';
import {AuthGuard} from '../auth/services/auth.guard';
import {RecipeStartComponent} from './components/recipe-start/recipe-start.component';
import {RecipeEditComponent} from './components/recipe-edit/recipe-edit.component';
import {RecipeDetailsComponent} from './components/recipe-details/recipe-details.component';
import {RecipesResolver} from './services/recipes.resolver';

const routes: Routes = [
  { path: '', component: RecipesComponent, canActivate: [AuthGuard], children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailsComponent, resolve: [RecipesResolver] },
      { path: ':id/edit', component: RecipeEditComponent },
    ] },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
