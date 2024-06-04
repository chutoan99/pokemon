import { Component, Input } from '@angular/core';
import { TYPE_COLOR } from '../resources';
import { Card } from '../interfaces';

@Component({
  selector: 'card',
  templateUrl: '../templates/card.template.html',
  styleUrls: ['../styles/card.style.css'],
})
export class CardComponent {
  @Input() public isShow!: boolean;
  @Input() public data!: Card;
  protected readonly typeRecords = TYPE_COLOR;

  /**
   * @return {void}
   */
  protected onClose(): void {
    this.isShow = false;
  }
}
