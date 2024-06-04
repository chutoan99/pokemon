import { Component, Input } from '@angular/core';

@Component({
  selector: 'loader',
  templateUrl: '../templates/loader.template.html',
  styleUrls: ['../styles/loader.style.css'],
})
export class LoaderComponent {
  @Input() isLoad!: boolean;
}
