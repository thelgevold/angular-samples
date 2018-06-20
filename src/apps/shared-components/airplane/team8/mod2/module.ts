
import {Component, NgModule} from '@angular/core';
import {Cmp820Component} from './cmp0/cmp';
import {Cmp821Component} from './cmp1/cmp';
import {Cmp822Component} from './cmp2/cmp';
import {Cmp823Component} from './cmp3/cmp';
import {Cmp824Component} from './cmp4/cmp';
import {Cmp825Component} from './cmp5/cmp';
import {Cmp826Component} from './cmp6/cmp';
import {Cmp827Component} from './cmp7/cmp';
import {Cmp828Component} from './cmp8/cmp';
import {Cmp829Component} from './cmp9/cmp';
@Component({
  selector: 'team8-mod2',
  template: '<div>team8: <cmp-820></cmp-820><cmp-821></cmp-821><cmp-822></cmp-822><cmp-823></cmp-823><cmp-824></cmp-824><cmp-825></cmp-825><cmp-826></cmp-826><cmp-827></cmp-827><cmp-828></cmp-828><cmp-829></cmp-829></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp820Component,Cmp821Component,Cmp822Component,Cmp823Component,Cmp824Component,Cmp825Component,Cmp826Component,Cmp827Component,Cmp828Component,Cmp829Component],
  exports: [Comp],
})
export class Module_airplane_team8_mod2 {}

        