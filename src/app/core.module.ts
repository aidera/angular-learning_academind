import {NgModule} from '@angular/core';
import {ShoppingListService} from './modules/shopping-list/services/shopping-list.service';
import {RecipeService} from './modules/recipes/services/recipe.service';
import {DataStorageService} from './shared/data-storage.service';
import {RecipesResolver} from './modules/recipes/services/recipes.resolver';
import {AuthService} from './modules/auth/services/auth.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './modules/auth/services/auth.interceptor';
import {AuthGuard} from './modules/auth/services/auth.guard';
import {LoggingService} from './services/logging.service';



@NgModule({
  providers: [
    ShoppingListService,
    RecipeService,
    DataStorageService,
    RecipesResolver,
    AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    AuthGuard,
    LoggingService
  ]
})
export class CoreModule {}
