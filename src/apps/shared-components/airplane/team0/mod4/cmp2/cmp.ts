
import {Component} from '@angular/core';
@Component({
  selector: 'cmp-42',
  template: '<strong>42</strong>&nbsp;',
})
export class Cmp42Component {
  add42(x: number) {
    return x + 42;
  }
}