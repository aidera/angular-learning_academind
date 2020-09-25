import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthComponent} from './components/auth.component';


const routes: Routes = [
  { path: '', component: AuthComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
