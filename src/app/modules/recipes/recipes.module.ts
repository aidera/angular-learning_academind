import { NgModule } from '@angular/core';

import {RecipeStartComponent} from './components/recipe-start/recipe-start.component';
import {RecipesComponent} from './components/recipes.component';
import {RecipeEditComponent} from './components/recipe-edit/recipe-edit.component';
import {RecipeListComponent} from './components/recipe-list/recipe-list.component';
import {RecipeItemComponent} from './components/recipe-list/recipe-item/recipe-item.component';
import {RecipeDetailsComponent} from './components/recipe-details/recipe-details.component';
import {RecipesRoutingModule} from './recipes-routing.module';
import {SharedModule} from '../../shared/shared.module';



@NgModule({
  declarations: [
    RecipeEditComponent,
    RecipeStartComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
  ],
  imports: [
    SharedModule,
    RecipesRoutingModule
  ],
})
export class RecipesModule { }
