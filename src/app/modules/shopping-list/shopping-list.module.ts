import { NgModule } from '@angular/core';

import {ShoppingListComponent} from './components/shopping-list.component';
import {ShoppingEditComponent} from './components/shopping-edit/shopping-edit.component';
import {ShoppingListRoutingModule} from './shopping-list-routing.module';
import {SharedModule} from '../../shared/shared.module';



@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent,
  ],
  imports: [
    SharedModule,
    ShoppingListRoutingModule
  ]
})
export class ShoppingListModule { }
