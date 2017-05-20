import {Component} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'demo-app',
  template: `
  <div class="container">
    <div>
        <div class="list-group col-md-3">
            <a [class.active]="getLinkStyle('/spreadsheet')" [routerLink]="['/']" class="list-group-item">Virtualized Spreadsheet</a>
            <a [class.active]="getLinkStyle('/countries')" [routerLink]="['/countries']" class="list-group-item">Lazy Loaded Tree View</a>
           
        </div>
        <div class="col-md-9">
            <router-outlet></router-outlet>
        </div>
    </div>

  </div>`
})
export class AppComponent {
  constructor(private location:Location) {}

  getLinkStyle(path) {
    return this.location.path().indexOf(path) > -1;
  }
}
