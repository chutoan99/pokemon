import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PokemonService } from './services';

import {
  ListCardComponent,
  HomePageComponent,
  PaginationComponent,
  LoaderComponent,
  CardComponent,
} from './components';

@NgModule({
  declarations: [
    CardComponent,
    HomePageComponent,
    ListCardComponent,
    PaginationComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [PokemonService],
})
export class HomeModule {}
