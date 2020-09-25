import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {RecipesResolver} from './modules/recipes/services/recipes.resolver';
import {AuthService} from './modules/auth/services/auth.service';
import {AuthInterceptor} from './modules/auth/services/auth.interceptor';
import {AuthGuard} from './modules/auth/services/auth.guard';
import {LoggingService} from './services/logging.service';



@NgModule({
  providers: [
    RecipesResolver,
    AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    AuthGuard,
    LoggingService
  ]
})
export class CoreModule {}
