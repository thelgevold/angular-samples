
import {Component, NgModule} from '@angular/core';
import {Cmp900Component} from './cmp0/cmp';
import {Cmp901Component} from './cmp1/cmp';
import {Cmp902Component} from './cmp2/cmp';
import {Cmp903Component} from './cmp3/cmp';
import {Cmp904Component} from './cmp4/cmp';
import {Cmp905Component} from './cmp5/cmp';
import {Cmp906Component} from './cmp6/cmp';
import {Cmp907Component} from './cmp7/cmp';
import {Cmp908Component} from './cmp8/cmp';
import {Cmp909Component} from './cmp9/cmp';
@Component({
  selector: 'team9-mod0',
  template: '<div>team9: <cmp-900></cmp-900><cmp-901></cmp-901><cmp-902></cmp-902><cmp-903></cmp-903><cmp-904></cmp-904><cmp-905></cmp-905><cmp-906></cmp-906><cmp-907></cmp-907><cmp-908></cmp-908><cmp-909></cmp-909></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp900Component,Cmp901Component,Cmp902Component,Cmp903Component,Cmp904Component,Cmp905Component,Cmp906Component,Cmp907Component,Cmp908Component,Cmp909Component],
  exports: [Comp],
})
export class Module_airplane_team9_mod0 {}

        