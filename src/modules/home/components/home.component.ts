import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { PokemonService } from '../services';
import { ParamCard } from '../models';
import { Card, TypeCard, TypeExtra, Types } from '../interfaces';
import {
  CONSTANT,
  SortType,
  SortValue,
  TYPE_COLOR,
  sortTypes,
  sortWith,
} from '../resources';
import { capitalizeFirstLetter } from '../helpers';

@Component({
  selector: 'app-home',
  templateUrl: '../templates/home.template.html',
  styleUrls: [
    '../styles/home.style.css',
    '../styles/sort.style.css',
    '../styles/filter.styles.css',
    '../styles/search.style.css',
  ],
})
export class HomePageComponent implements OnInit {
  protected paramsCard = new ParamCard();
  protected records: Card[] | [] = [];
  protected types: Types[] | [] = [];
  protected images: string = '';
  protected urls: any[] = [];
  protected isLoading: boolean = false;
  protected typesRecords: TypeExtra[] = [];
  protected sortOrder: string = SortType.ASC;
  protected sortTypesRecord = sortTypes;
  protected sortValue: string = SortValue.NUMBER;
  protected sortWithRecord = sortWith;

  constructor(
    private readonly _cdRef: ChangeDetectorRef,
    private readonly _pokemonService: PokemonService
  ) {
    this.typesRecords = Object.values(TYPE_COLOR);
  }

  ngOnInit() {
    this._getListsPokemon();
    this._getTypesPokemon();
  }

  /**
   * @param {TypeCard} id
   * @return {void}
   */
  protected onChooseType(id: TypeCard): void {
    this.paramsCard.type = id;
    this.paramsCard.name = '';
    this.paramsCard.page = CONSTANT.PAGE_DEFAULT;
    this._getListsPokemon();
  }

  /**
   * @return {void}
   */
  protected onSearch(): void {
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
  protected onPageChange(currentPage: number): void {
    this.paramsCard.page = currentPage;
    this._getListsPokemon();
  }

  /**
   * @param {SortType} order
   * @return {void}
   */
  protected selectSortOrder(order: SortType): void {
    this.sortOrder = order;
    this._setParamSort(this.sortValue as SortValue);
    this._getListsPokemon();
  }

  /**
   * @param {SortType} order
   * @return {void}
   */
  protected selectSortValue(value: SortValue): void {
    this.sortValue = value;
    this._setParamSort(value);
    this._getListsPokemon();
  }

  /**
   * @return {void}
   */
  private _getListsPokemon(): void {
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
  private _getTypesPokemon(): void {
    this._pokemonService.getTypes().subscribe((res: Types[] | []) => {
      this.types = res;
    });
  }

  /**
   * @param {string} id
   * @return {void}
   */
  private _getSpritePokemon(id: string): void {
    this._pokemonService.getImage(id).subscribe((res: any) => {
      this.images = URL.createObjectURL(res);
    });
  }

  /**
   * @param value
   * @return {void}
   */
  private _setParamSort(value: SortValue): void {
    switch (this.sortOrder) {
      case SortType.ASC:
        this.paramsCard.sort = `${value}`;
        break;
      case SortType.DES:
        this.paramsCard.sort = `-${value}`;
        break;
    }
  }
}
