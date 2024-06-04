import { PokemonService } from './../services/pokemon.service';
import {
  ChangeDetectionStrategy,
  Component,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
@Component({
  selector: 'pagination',
  templateUrl: '../templates/pagination.template.html',
  styleUrls: ['../styles/pagination.style.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
  @Input() public currentPage!: number;

  @Output() public pageChange: EventEmitter<number> =
    new EventEmitter<number>();

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
  protected onNextPage(): void {
    if (this.currentPage < this._displayPage) {
      this.currentPage++;
      this._updatePage();
    }
  }

  /**
   * @param {number} page
   * @return {void}
   */
  protected onGoToPage(page: number): void {
    if (page === this.currentPage) return;
    this.currentPage = page;
    this._updatePage();
  }

  /**
   * @return {void}
   */
  protected onPrevPage(): void {
    if (this.currentPage > this._firstPage) {
      this.currentPage--;
      this._updatePage();
    }
  }

  /**
   * @return {void}
   */
  protected onFirstPage(): void {
    this.currentPage = this._firstPage;
    this._updatePage();
  }

  /**
   * @return {void}
   */
  protected onLastPage(): void {
    this.currentPage = this._displayPage;
    this._updatePage();
  }

  /**
   * @return {void}
   */
  private _updatePage(): void {
    this.pageChange.emit(this.currentPage);
  }
}
