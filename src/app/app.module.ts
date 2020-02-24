import { NgSelectModule } from '@ng-select/ng-select';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule, MatSidenavModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SelectTesauroTextComponent } from './select-tesauro-text/select-tesauro-text.component';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { JurTypeheadComponent } from './jur-typehead/jur-typehead.component';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';
import { HighlightMouseDirective } from './shared/highlight-mouse.directive';
import { NgElseDirective } from './shared/ng-else.directive';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ClickOutsideDirective } from './jur-typehead/click-outside.directive';
import { JurTypeheadCustomComponent } from './jur-typehead-custom/jur-typehead-custom.component';
import { ClickOutsideModule } from 'ng-click-outside';


@NgModule({
  declarations: [
    AppComponent,
    SelectTesauroTextComponent,
    TextEditorComponent,
    JurTypeheadComponent,
    FundoAmareloDirective,
    HighlightMouseDirective,
    NgElseDirective,
    ClickOutsideDirective,
    JurTypeheadCustomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatSidenavModule,
    NgSelectModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgbModalModule,
    TypeaheadModule.forRoot(),
    BsDropdownModule.forRoot(),
    ClickOutsideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
