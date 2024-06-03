import { PokemonService } from './../services/pokemon.service';
import {
  ChangeDetectionStrategy,
  Component,
  Output,
  EventEmitter,
} from '@angular/core';
import { Card } from '../interfaces';
import { CONSTANT } from '../resources';

@Component({
  selector: 'pagination',
  templateUrl: '../templates/pagination.template.html',
  styleUrls: ['../styles/pagination.style.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
  @Output() public pageChange: EventEmitter<Card[]> = new EventEmitter<
    Card[]
  >();
  protected currentPage: number = CONSTANT.PAGE_DEFAULT;
  private _firstPage: number = 1;
  private _displayPage: number = 0;
  private _maxPage: number = 10;

  constructor(private _pokemonService: PokemonService) {
    this._displayPage = this._pokemonService?.pagination?.last_page;
  }

  get pages(): number[] {
    const pagesArray: number[] = [];

    let startPage: number = Math.max(
      1,
      this.currentPage - Math.floor(this._maxPage / 2)
    );
    let endPage: number = startPage + this._maxPage - 1;

    if (endPage > this._displayPage) {
      endPage = this._displayPage;
      startPage = Math.max(endPage - this._maxPage + 1, 1);
    }

    for (let i: number = startPage; i <= endPage; i++) {
      pagesArray.push(i);
    }
    return pagesArray;
  }

  get isFirst(): boolean {
    return this.currentPage === 1;
  }

  get isLast(): boolean {
    return this.currentPage === this._displayPage;
  }

  /**
   * @return {void}
   */
  protected onNextPage() {
    if (this.currentPage < this._displayPage) {
      this.currentPage++;
    }
  }

  /**
   * @param {number} page
   * @return {void}
   */
  protected onGoToPage(page: number) {
    if (page === this.currentPage) return;
    this.currentPage = page;
  }

  /**
   * @return {void}
   */
  protected onPrevPage() {
    if (this.currentPage > this._firstPage) {
      this.currentPage--;
    }
  }

  /**
   * @return {void}
   */
  protected onFirstPage() {
    this.currentPage = this._firstPage;
  }

  /**
   * @return {void}
   */
  protected onLastPage() {
    this.currentPage = this._displayPage;
  }
}
