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
            <a [class.active]="getLinkStyle('/streams')" [routerLink]="['/streams']" class="list-group-item">RxJs Streams</a>
            <a [class.active]="getLinkStyle('/graph')" [routerLink]="['/graph']" class="list-group-item">Graph</a>
            <a [class.active]="getLinkStyle('/sort')" [routerLink]="['/sort']" class="list-group-item">Insertion Sort</a>
            <a [class.active]="getLinkStyle('/redux')" [routerLink]="['/redux']" class="list-group-item">Redux</a>
            <a [class.active]="getLinkStyle('/buffering')" [routerLink]="['/buffering']" class="list-group-item">Buffering in RxJs</a>
            <a [class.active]="getLinkStyle('/dynamic-form')" [routerLink]="['/dynamic-form']" class="list-group-item">Dynamic Form</a>
            <a [class.active]="getLinkStyle('/pub-sub')" [routerLink]="['/pub-sub']" class="list-group-item">Pub Sub</a>
            <a [class.active]="getLinkStyle('/text-editor')" [routerLink]="['/text-editor']" class="list-group-item">Text Editor</a>
            <a [class.active]="getLinkStyle('/input-controls')" [routerLink]="['/input-controls']" class="list-group-item">Input Controls</a>
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
