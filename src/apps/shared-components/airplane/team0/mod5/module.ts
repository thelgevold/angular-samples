
import {Component, NgModule} from '@angular/core';
import {Cmp50Component} from './cmp0/cmp';
import {Cmp51Component} from './cmp1/cmp';
import {Cmp52Component} from './cmp2/cmp';
import {Cmp53Component} from './cmp3/cmp';
import {Cmp54Component} from './cmp4/cmp';
import {Cmp55Component} from './cmp5/cmp';
import {Cmp56Component} from './cmp6/cmp';
import {Cmp57Component} from './cmp7/cmp';
import {Cmp58Component} from './cmp8/cmp';
import {Cmp59Component} from './cmp9/cmp';
@Component({
  selector: 'team0-mod5',
  template: '<div>team0: <cmp-50></cmp-50><cmp-51></cmp-51><cmp-52></cmp-52><cmp-53></cmp-53><cmp-54></cmp-54><cmp-55></cmp-55><cmp-56></cmp-56><cmp-57></cmp-57><cmp-58></cmp-58><cmp-59></cmp-59></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp50Component,Cmp51Component,Cmp52Component,Cmp53Component,Cmp54Component,Cmp55Component,Cmp56Component,Cmp57Component,Cmp58Component,Cmp59Component],
  exports: [Comp],
})
export class Module_airplane_team0_mod5 {}

        