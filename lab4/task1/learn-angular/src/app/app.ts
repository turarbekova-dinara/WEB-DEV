import {Component} from '@angular/core';
import {Child} from './9';


@Component({
  selector: 'app-root',
  template: `
    <app-9 (addItemEvent)="addItem($event)" />
    <p>🐢 all the way down {{ items.length }}</p>
  `,
  imports: [Child],
})
export class App {
  items = new Array();

  addItem(item: string) {
    this.items.push(item);
  }
}