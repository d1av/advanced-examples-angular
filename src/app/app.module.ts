import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { NavbarTopComponent } from './shared/components/layout/navbar-top/navbar-top.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PagesModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
