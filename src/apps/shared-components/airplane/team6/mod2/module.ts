
import {Component, NgModule} from '@angular/core';
import {Cmp620Component} from './cmp0/cmp';
import {Cmp621Component} from './cmp1/cmp';
import {Cmp622Component} from './cmp2/cmp';
import {Cmp623Component} from './cmp3/cmp';
import {Cmp624Component} from './cmp4/cmp';
import {Cmp625Component} from './cmp5/cmp';
import {Cmp626Component} from './cmp6/cmp';
import {Cmp627Component} from './cmp7/cmp';
import {Cmp628Component} from './cmp8/cmp';
import {Cmp629Component} from './cmp9/cmp';
@Component({
  selector: 'team6-mod2',
  template: '<div>team6: <cmp-620></cmp-620><cmp-621></cmp-621><cmp-622></cmp-622><cmp-623></cmp-623><cmp-624></cmp-624><cmp-625></cmp-625><cmp-626></cmp-626><cmp-627></cmp-627><cmp-628></cmp-628><cmp-629></cmp-629></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp620Component,Cmp621Component,Cmp622Component,Cmp623Component,Cmp624Component,Cmp625Component,Cmp626Component,Cmp627Component,Cmp628Component,Cmp629Component],
  exports: [Comp],
})
export class Module_airplane_team6_mod2 {}

        