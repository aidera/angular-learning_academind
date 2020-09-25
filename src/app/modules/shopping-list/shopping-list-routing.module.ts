import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ShoppingListComponent} from './components/shopping-list.component';


const routes: Routes = [
  { path: '', component: ShoppingListComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingListRoutingModule { }
