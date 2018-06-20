
import {Component, NgModule} from '@angular/core';
import {Cmp560Component} from './cmp0/cmp';
import {Cmp561Component} from './cmp1/cmp';
import {Cmp562Component} from './cmp2/cmp';
import {Cmp563Component} from './cmp3/cmp';
import {Cmp564Component} from './cmp4/cmp';
import {Cmp565Component} from './cmp5/cmp';
import {Cmp566Component} from './cmp6/cmp';
import {Cmp567Component} from './cmp7/cmp';
import {Cmp568Component} from './cmp8/cmp';
import {Cmp569Component} from './cmp9/cmp';
@Component({
  selector: 'team5-mod6',
  template: '<div>team5: <cmp-560></cmp-560><cmp-561></cmp-561><cmp-562></cmp-562><cmp-563></cmp-563><cmp-564></cmp-564><cmp-565></cmp-565><cmp-566></cmp-566><cmp-567></cmp-567><cmp-568></cmp-568><cmp-569></cmp-569></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp560Component,Cmp561Component,Cmp562Component,Cmp563Component,Cmp564Component,Cmp565Component,Cmp566Component,Cmp567Component,Cmp568Component,Cmp569Component],
  exports: [Comp],
})
export class Module_airplane_team5_mod6 {}

        