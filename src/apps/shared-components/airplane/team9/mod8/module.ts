
import {Component, NgModule} from '@angular/core';
import {Cmp980Component} from './cmp0/cmp';
import {Cmp981Component} from './cmp1/cmp';
import {Cmp982Component} from './cmp2/cmp';
import {Cmp983Component} from './cmp3/cmp';
import {Cmp984Component} from './cmp4/cmp';
import {Cmp985Component} from './cmp5/cmp';
import {Cmp986Component} from './cmp6/cmp';
import {Cmp987Component} from './cmp7/cmp';
import {Cmp988Component} from './cmp8/cmp';
import {Cmp989Component} from './cmp9/cmp';
@Component({
  selector: 'team9-mod8',
  template: '<div>team9: <cmp-980></cmp-980><cmp-981></cmp-981><cmp-982></cmp-982><cmp-983></cmp-983><cmp-984></cmp-984><cmp-985></cmp-985><cmp-986></cmp-986><cmp-987></cmp-987><cmp-988></cmp-988><cmp-989></cmp-989></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp980Component,Cmp981Component,Cmp982Component,Cmp983Component,Cmp984Component,Cmp985Component,Cmp986Component,Cmp987Component,Cmp988Component,Cmp989Component],
  exports: [Comp],
})
export class Module_airplane_team9_mod8 {}

        