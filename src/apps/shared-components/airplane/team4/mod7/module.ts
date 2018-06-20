
import {Component, NgModule} from '@angular/core';
import {Cmp470Component} from './cmp0/cmp';
import {Cmp471Component} from './cmp1/cmp';
import {Cmp472Component} from './cmp2/cmp';
import {Cmp473Component} from './cmp3/cmp';
import {Cmp474Component} from './cmp4/cmp';
import {Cmp475Component} from './cmp5/cmp';
import {Cmp476Component} from './cmp6/cmp';
import {Cmp477Component} from './cmp7/cmp';
import {Cmp478Component} from './cmp8/cmp';
import {Cmp479Component} from './cmp9/cmp';
@Component({
  selector: 'team4-mod7',
  template: '<div>team4: <cmp-470></cmp-470><cmp-471></cmp-471><cmp-472></cmp-472><cmp-473></cmp-473><cmp-474></cmp-474><cmp-475></cmp-475><cmp-476></cmp-476><cmp-477></cmp-477><cmp-478></cmp-478><cmp-479></cmp-479></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp470Component,Cmp471Component,Cmp472Component,Cmp473Component,Cmp474Component,Cmp475Component,Cmp476Component,Cmp477Component,Cmp478Component,Cmp479Component],
  exports: [Comp],
})
export class Module_airplane_team4_mod7 {}

        