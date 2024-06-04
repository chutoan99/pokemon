import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { Card } from '../interfaces';
import { TYPE_COLOR } from '../resources';
import { PokemonService } from '../services';
import { finalize } from 'rxjs';

@Component({
  selector: 'list-card',
  templateUrl: '../templates/list-card.template.html',
  styleUrls: ['../styles/list-card.style.css'],
})
export class ListCardComponent {
  @Input() public records!: Card[];
  @Input() public isLoad: boolean = false;

  protected isShowDetail: boolean = false;
  protected recordDetail: Card = new Card()
  protected readonly typeRecords = TYPE_COLOR;

  constructor(
    private readonly _cdRef: ChangeDetectorRef,
    private readonly _pokemonService: PokemonService
  ) {}

  /**
   * @param {string} id
   * @return {void}
   */
  protected onShowDetail(id: string) {
    this._getDetailPokemon(id);
  }

  /**
   * @param {string} id
   * @return {void}
   */
  private _getDetailPokemon(id: string) {
    this.isShowDetail = false;
    this._pokemonService
      .getDetail(id)
      .pipe(
        finalize(() => {
          this.isShowDetail = true;
          this._cdRef.markForCheck();
        })
      )
      .subscribe((res: Card | {}) => {
        if (res) {
          this.recordDetail = res as Card;
        }
      });
  }
}
