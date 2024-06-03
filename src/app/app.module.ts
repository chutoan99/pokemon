import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultLayoutModule } from '../layouts/default/default.module';
import { HomeModule } from '../modules/home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HomeModule,
    DefaultLayoutModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
