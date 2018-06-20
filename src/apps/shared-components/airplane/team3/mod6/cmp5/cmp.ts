
import {Component} from '@angular/core';
@Component({
  selector: 'cmp-365',
  template: '<strong>365</strong>&nbsp;',
})
export class Cmp365Component {
  add365(x: number) {
    return x + 365;
  }
}