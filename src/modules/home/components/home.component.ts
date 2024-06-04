import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PokemonService } from '../services';
import { ParamCard } from '../models';
import { Card, TypeCard, TypeExtra, Types } from '../interfaces';
import { CONSTANT, TYPE_COLOR } from '../resources';
import { capitalizeFirstLetter } from '../helpers';
import { finalize } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: '../templates/home.template.html',
  styleUrls: ['../styles/home.style.css'],
})
export class HomePageComponent implements OnInit {
  protected paramsCard = new ParamCard();
  protected recordDetail: Card | {} = {};
  protected records: Card[] | [] = [];
  protected types: Types[] | [] = [];
  protected images: string = '';
  protected urls: any[] = [];
  protected isLoading: boolean = false;
  protected typesRecords: TypeExtra[] = [];

  constructor(
    private readonly _cdRef: ChangeDetectorRef,
    private readonly _pokemonService: PokemonService
  ) {
    this.typesRecords = Object.values(TYPE_COLOR);
  }

  ngOnInit() {
    this._getListsPokemon();
    this._getTypesPokemon();
    this._getDetailPokemon('01H5GXS0FP36H9RNBQN5Z415W4');
  }

  /**
   * @param {TypeCard} id
   * @return {void}
   */
  protected onChooseType(id: TypeCard) {
    this.paramsCard.type = id;
    this.paramsCard.name = '';
    this.paramsCard.page = CONSTANT.PAGE_DEFAULT;
    this._getListsPokemon();
  }

  /**
   * @return {void}
   */
  protected onSearch() {
    this.paramsCard.name = capitalizeFirstLetter(this.paramsCard.name?.trim());
    if (!this.paramsCard.name) return;
    this.paramsCard.type = undefined;
    this.paramsCard.page = CONSTANT.PAGE_DEFAULT;
    this._getListsPokemon();
  }

  /**
   * @param {number} currentPage
   * @return {void}
   */
  protected onPageChange(currentPage: number) {
    this.paramsCard.page = currentPage;
    this._getListsPokemon();
  }

  /**
   * @return {void}
   */
  private _getListsPokemon() {
    this.isLoading = true;
    this._pokemonService
      .getList(this.paramsCard)
      .pipe(
        finalize(() => {
          setTimeout(() => {
            this.isLoading = false;
            this._cdRef.markForCheck();
          }, 500);
        })
      )
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
