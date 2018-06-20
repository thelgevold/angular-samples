
import {Component} from '@angular/core';
@Component({
  selector: 'cmp-100',
  template: '<strong>100</strong>&nbsp;',
})
export class Cmp100Component {
  add100(x: number) {
    return x + 100;
  }
}