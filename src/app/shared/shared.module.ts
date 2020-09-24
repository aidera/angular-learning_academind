import {NgModule} from '@angular/core';

import {AlertComponent} from './components/alert/alert.component';
import {SpinnerComponent} from './components/spinner/spinner.component';
import {PlaceholderDirective} from './placeholder.directive';
import {DropdownDirective} from './dropdown.directive';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AlertComponent,
    SpinnerComponent,
    PlaceholderDirective,
    DropdownDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AlertComponent,
    SpinnerComponent,
    PlaceholderDirective,
    DropdownDirective
  ]
})
export class SharedModule {}
