
import {Component, NgModule} from '@angular/core';
import {Cmp760Component} from './cmp0/cmp';
import {Cmp761Component} from './cmp1/cmp';
import {Cmp762Component} from './cmp2/cmp';
import {Cmp763Component} from './cmp3/cmp';
import {Cmp764Component} from './cmp4/cmp';
import {Cmp765Component} from './cmp5/cmp';
import {Cmp766Component} from './cmp6/cmp';
import {Cmp767Component} from './cmp7/cmp';
import {Cmp768Component} from './cmp8/cmp';
import {Cmp769Component} from './cmp9/cmp';
@Component({
  selector: 'team7-mod6',
  template: '<div>team7: <cmp-760></cmp-760><cmp-761></cmp-761><cmp-762></cmp-762><cmp-763></cmp-763><cmp-764></cmp-764><cmp-765></cmp-765><cmp-766></cmp-766><cmp-767></cmp-767><cmp-768></cmp-768><cmp-769></cmp-769></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp760Component,Cmp761Component,Cmp762Component,Cmp763Component,Cmp764Component,Cmp765Component,Cmp766Component,Cmp767Component,Cmp768Component,Cmp769Component],
  exports: [Comp],
})
export class Module_airplane_team7_mod6 {}

        