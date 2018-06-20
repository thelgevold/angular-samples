
import {Component} from '@angular/core';
@Component({
  selector: 'cmp-256',
  template: '<strong>256</strong>&nbsp;',
})
export class Cmp256Component {
  add256(x: number) {
    return x + 256;
  }
}