import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import * as fromRoot from './root.reducer';
import {environment} from '../../environments/environment';
import {rootEffects} from './root.effects';


@NgModule({
  imports: [
    StoreModule.forRoot(fromRoot.rootReducer),
    EffectsModule.forRoot(rootEffects),
    StoreDevtoolsModule.instrument({logOnly: environment.production}),
    StoreRouterConnectingModule.forRoot(),
  ],
  exports: [
    StoreModule,
    EffectsModule,
    StoreDevtoolsModule,
    StoreRouterConnectingModule,
  ]
})
export class NgrxModule {}
