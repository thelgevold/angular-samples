
import {Component} from '@angular/core';
@Component({
  selector: 'cmp-128',
  template: '<strong>128</strong>&nbsp;',
})
export class Cmp128Component {
  add128(x: number) {
    return x + 128;
  }
}