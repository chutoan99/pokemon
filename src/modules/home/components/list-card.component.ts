import { Component, Input } from '@angular/core';
import { Card } from '../interfaces';
import { TYPE_COLOR } from '../resources';
@Component({
  selector: 'list-card',
  templateUrl: '../templates/list-card.template.html',
  styleUrls: ['../styles/list-card.style.css'],
})
export class ListCardComponent  {
  @Input() public records!: Card[];
  @Input() public isLoad: boolean = false

  protected readonly typeRecords = TYPE_COLOR
}
