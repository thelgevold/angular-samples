
import {Component} from '@angular/core';
@Component({
  selector: 'cmp-1',
  template: '<strong>1</strong>&nbsp;',
})
export class Cmp1Component {
  add1(x: number) {
    return x + 1;
  }
}