
import {Component} from '@angular/core';
@Component({
  selector: 'cmp-3',
  template: '<strong>3</strong>&nbsp;',
})
export class Cmp3Component {
  add3(x: number) {
    return x + 3;
  }
}