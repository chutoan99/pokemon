import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services';
import { ParamCard } from '../models';
import { Card, Types } from '../interfaces';
@Component({
  selector: 'app-home',
  templateUrl: '../templates/home.template.html',
  styleUrls: ['../styles/home.style.css'],
})
export class HomePageComponent implements OnInit {
  protected paramsCard: ParamCard = new ParamCard();
  protected recordDetail: Card | {} = {};
  protected records: Card[] | [] = [];
  protected types: Types[] | [] = [];
  protected images: string = '';
  protected urls: any[] = [];

  constructor(private _pokemonService: PokemonService) {}

  ngOnInit() {
    this._getListsPokemon();
    this._getTypesPokemon();
    this._getDetailPokemon('01H5GXS0FP36H9RNBQN5Z415W4');
    this._getSpritePokemon('01H5GXS0FP36H9RNBQN5Z415W4');
  }

  /**
   * @return {void}
   */
  private _getListsPokemon() {
    this._pokemonService
      .getList(this.paramsCard)
      .subscribe((res: Card[] | []) => {
        this.records = res;
      });
  }

  /**
   * @return {void}
   */
  private _getTypesPokemon() {
    this._pokemonService.getTypes().subscribe((res: Types[] | []) => {
      this.types = res;
    });
  }

  /**
   * @param {string} id
   * @return {void}
   */
  private _getDetailPokemon(id: string) {
    this._pokemonService.getDetail(id).subscribe((res: Card | {}) => {
      this.recordDetail = res;
    });
  }

  /**
   * @param {string} id
   * @return {void}
   */
  private _getSpritePokemon(id: string) {
    this._pokemonService.getImage(id).subscribe((res: any) => {
      this.images = URL.createObjectURL(res);
    });
  }
}
