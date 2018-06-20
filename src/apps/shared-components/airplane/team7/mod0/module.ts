
import {Component, NgModule} from '@angular/core';
import {Cmp700Component} from './cmp0/cmp';
import {Cmp701Component} from './cmp1/cmp';
import {Cmp702Component} from './cmp2/cmp';
import {Cmp703Component} from './cmp3/cmp';
import {Cmp704Component} from './cmp4/cmp';
import {Cmp705Component} from './cmp5/cmp';
import {Cmp706Component} from './cmp6/cmp';
import {Cmp707Component} from './cmp7/cmp';
import {Cmp708Component} from './cmp8/cmp';
import {Cmp709Component} from './cmp9/cmp';
@Component({
  selector: 'team7-mod0',
  template: '<div>team7: <cmp-700></cmp-700><cmp-701></cmp-701><cmp-702></cmp-702><cmp-703></cmp-703><cmp-704></cmp-704><cmp-705></cmp-705><cmp-706></cmp-706><cmp-707></cmp-707><cmp-708></cmp-708><cmp-709></cmp-709></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp700Component,Cmp701Component,Cmp702Component,Cmp703Component,Cmp704Component,Cmp705Component,Cmp706Component,Cmp707Component,Cmp708Component,Cmp709Component],
  exports: [Comp],
})
export class Module_airplane_team7_mod0 {}

        