
import {Component} from '@angular/core';
@Component({
  selector: 'cmp-2',
  template: '<strong>2</strong>&nbsp;',
})
export class Cmp2Component {
  add2(x: number) {
    return x + 2;
  }
}