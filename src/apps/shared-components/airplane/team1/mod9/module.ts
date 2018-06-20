
import {Component, NgModule} from '@angular/core';
import {Cmp190Component} from './cmp0/cmp';
import {Cmp191Component} from './cmp1/cmp';
import {Cmp192Component} from './cmp2/cmp';
import {Cmp193Component} from './cmp3/cmp';
import {Cmp194Component} from './cmp4/cmp';
import {Cmp195Component} from './cmp5/cmp';
import {Cmp196Component} from './cmp6/cmp';
import {Cmp197Component} from './cmp7/cmp';
import {Cmp198Component} from './cmp8/cmp';
import {Cmp199Component} from './cmp9/cmp';
@Component({
  selector: 'team1-mod9',
  template: '<div>team1: <cmp-190></cmp-190><cmp-191></cmp-191><cmp-192></cmp-192><cmp-193></cmp-193><cmp-194></cmp-194><cmp-195></cmp-195><cmp-196></cmp-196><cmp-197></cmp-197><cmp-198></cmp-198><cmp-199></cmp-199></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp190Component,Cmp191Component,Cmp192Component,Cmp193Component,Cmp194Component,Cmp195Component,Cmp196Component,Cmp197Component,Cmp198Component,Cmp199Component],
  exports: [Comp],
})
export class Module_airplane_team1_mod9 {}

        