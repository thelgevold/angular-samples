import {Component} from '@angular/core';

import {Location} from '@angular/common';

@Component({
  selector: 'demo-page',
  template: `
  <div class="container">
    <div>
        <div class="list-group col-md-3">
            <a [class.active]="getLinkStyle('/demo/spreadsheet')" [routerLink]="['/demo/spreadsheet']" class="list-group-item">Virtualized Spreadsheet</a>
            <a [class.active]="getLinkStyle('/demo/countries')" [routerLink]="['/demo/countries']" class="list-group-item">Lazy Loaded Tree View</a>
            <a [class.active]="getLinkStyle('/demo/rxjs')" [routerLink]="['/demo/rxjs']" class="list-group-item">RxJs Streams</a>
            <a [class.active]="getLinkStyle('/demo/graph')" [routerLink]="['/demo/graph']" class="list-group-item">Graph</a>
            <a [class.active]="getLinkStyle('/demo/algorithms')" [routerLink]="['/demo/algorithms']" class="list-group-item">Insertion Sort</a>
            <a [class.active]="getLinkStyle('/demo/redux')" [routerLink]="['/demo/redux']" class="list-group-item">Redux</a>
            <a [class.active]="getLinkStyle('/demo/buffering')" [routerLink]="['/demo/buffering']" class="list-group-item">Buffering in RxJs</a>
            <a [class.active]="getLinkStyle('/demo/survey')" [routerLink]="['/demo/survey']" class="list-group-item">Dynamic Form</a>
            <a [class.active]="getLinkStyle('/demo/pub-sub')" [routerLink]="['/demo/pub-sub']" class="list-group-item">Pub Sub</a>
            <a [class.active]="getLinkStyle('/demo/text-editor')" [routerLink]="['/demo/text-editor']" class="list-group-item">Text Editor</a>
            <a [class.active]="getLinkStyle('/demo/input')" [routerLink]="['/demo/input']" class="list-group-item">Input Controls</a>
            <a [class.active]="getLinkStyle('/demo/treeview')" [routerLink]="['/demo/treeview']" class="list-group-item">Recursive tree view</a>
            <a [class.active]="getLinkStyle('/demo/contact')" [routerLink]="['/demo/contact']" class="list-group-item">Interactive contact list</a>
            <a [class.active]="getLinkStyle('/demo/iodemo')" [routerLink]="['/demo/iodemo']" class="list-group-item">Input/Output</a>
       </div>

        <div class="col-md-9">
            <router-outlet></router-outlet>
        </div>
    </div>

  </div>`
})

export class DemoComponent {
  constructor(private location:Location) {}

  getLinkStyle(path) {
    return this.location.path().indexOf(path) > -1;
  }
}


