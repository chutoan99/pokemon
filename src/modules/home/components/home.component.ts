import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services';
import { ParamCard } from '../models';
import { Card, TypeExtra, Types } from '../interfaces';
import { TYPE_COLOR } from '../resources';
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
  protected TYPE_COLOR = TYPE_COLOR;
  protected typesRecords: TypeExtra[] = [];
  protected currentType: number = -1;
  constructor(private _pokemonService: PokemonService) {
    this.typesRecords = Object.values(TYPE_COLOR);
  }

  ngOnInit() {
    this._getListsPokemon();
    this._getTypesPokemon();
    this._getDetailPokemon('01H5GXS0FP36H9RNBQN5Z415W4');
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

  /**
   * @param {TypeExtra} type
   * @return {void}
   */
  protected onChooseType(type: TypeExtra) {
    this.currentType = type.id;
  }

  /**
   * @return {void}
   */
  protected onSearch() {
    this._getListsPokemon();
  }
}
