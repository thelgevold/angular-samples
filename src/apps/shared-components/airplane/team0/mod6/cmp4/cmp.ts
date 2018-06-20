
import {Component} from '@angular/core';
@Component({
  selector: 'cmp-64',
  template: '<strong>64</strong>&nbsp;',
})
export class Cmp64Component {
  add64(x: number) {
    return x + 64;
  }
}