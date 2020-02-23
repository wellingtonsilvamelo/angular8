import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JurTypeheadCustomComponent } from './jur-typehead-custom.component';
import { JurClickOutsideDirective } from './jur-click-outside.directive';

@NgModule({
  declarations: [JurTypeheadCustomComponent, JurClickOutsideDirective ],
  imports: [
    CommonModule
  ]
})
export class JurTypeheadCustomModule { }
