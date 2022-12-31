import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NavbarencabezadoComponent } from './navbarencabezado/navbarencabezado.component';
import { PaginahomemainComponent } from './paginahomemain/paginahomemain.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarencabezadoComponent,
    PaginahomemainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
