import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JurTypeheadCustomComponent } from './jur-typehead-custom.component';
import { JurClickOutsideDirective } from './jur-click-outside.directive';
import { HighlightPipe } from './highlight.pipe';

@NgModule({
  declarations: [JurTypeheadCustomComponent, JurClickOutsideDirective, HighlightPipe ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightPipe
  ]
})
export class JurTypeheadCustomModule { }
