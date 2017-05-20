import {Component} from '@angular/core';

import {Location} from '@angular/common';

@Component({
  selector: 'demo-page',
  templateUrl: './demo.component.html'
})

export class DemoComponent {
  constructor(private location:Location) {}

  getLinkStyle(path) {
    return this.location.path().indexOf(path) > -1;
  }
}


