import { Component, Input } from '@angular/core';
import { Card, TypeExtra } from '../interfaces';
import { TYPE_COLOR } from '../resources';
@Component({
  selector: 'card-item',
  templateUrl: '../templates/card.template.html',
  styleUrls: ['../styles/card.style.css'],
})
export class CardComponent  {
  @Input() public data!: Card;
  protected typeColor: TypeExtra | null = null;
  protected TYPE_COLOR = TYPE_COLOR
}
