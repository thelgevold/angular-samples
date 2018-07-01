import {Component} from '@angular/core';
import {InsertionSortService} from './insertion-sort.service';

@Component({
  selector: 'insertion-sort',
  inputs: ['list: list'],
  styleUrls: ['insertion-sort.css'],
  template: `
    <table class="sort">
    <tr>
        <td *ngFor="let item of list.items" [ngClass]="item.getClass()">
            <span>{{item.val}}</span>
        </td>
    </tr>
    </table>
    <div style="margin-top: 10px;">
        <button (click)="sortList()">Sort list</button>
    </div>`,
})
export class InsertionSort {
  list: ValList;

  constructor() {
    this.list = new ValList();
    this.list.items = [
      new ListItem(5),
      new ListItem(33),
      new ListItem(5),
      new ListItem(5),
      new ListItem(2),
      new ListItem(-2),
      new ListItem(4),
      new ListItem(88),
      new ListItem(6),
      new ListItem(400),
      new ListItem(1),
      new ListItem(58),
      new ListItem(30),
    ];
  }

  sortList() {
    InsertionSortService.sort(this.list);
  }
}

export class ValList {
  items: Array<ListItem>;

  setCurrent(item) {
    this.clearAll();
    item.current = true;
  }

  clearAll() {
    this.items.forEach(i => (i.current = false));
  }
}

export class ListItem {
  val: Number;
  current: Boolean;

  constructor(val) {
    this.val = val;
    this.current = false;
  }

  getClass() {
    if (this.current) {
      return 'current-item';
    }
    return null;
  }
}
