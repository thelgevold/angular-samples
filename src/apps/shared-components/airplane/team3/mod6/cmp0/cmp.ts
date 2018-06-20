
import {Component} from '@angular/core';
@Component({
  selector: 'cmp-360',
  template: '<strong>360</strong>&nbsp;',
})
export class Cmp360Component {
  add360(x: number) {
    return x + 360;
  }
}