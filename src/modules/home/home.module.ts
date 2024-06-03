import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {
  CardComponent,
  HomePageComponent,
  PaginationComponent,
} from './components';
import { PokemonService } from './services';

@NgModule({
  declarations: [HomePageComponent, CardComponent, PaginationComponent],
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
