
import {Component} from '@angular/core';
@Component({
  selector: 'cmp-10',
  template: '<strong>10</strong>&nbsp;',
})
export class Cmp10Component {
  add10(x: number) {
    return x + 10;
  }
}