
import {Component, NgModule} from '@angular/core';
import {Cmp730Component} from './cmp0/cmp';
import {Cmp731Component} from './cmp1/cmp';
import {Cmp732Component} from './cmp2/cmp';
import {Cmp733Component} from './cmp3/cmp';
import {Cmp734Component} from './cmp4/cmp';
import {Cmp735Component} from './cmp5/cmp';
import {Cmp736Component} from './cmp6/cmp';
import {Cmp737Component} from './cmp7/cmp';
import {Cmp738Component} from './cmp8/cmp';
import {Cmp739Component} from './cmp9/cmp';
@Component({
  selector: 'team7-mod3',
  template: '<div>team7: <cmp-730></cmp-730><cmp-731></cmp-731><cmp-732></cmp-732><cmp-733></cmp-733><cmp-734></cmp-734><cmp-735></cmp-735><cmp-736></cmp-736><cmp-737></cmp-737><cmp-738></cmp-738><cmp-739></cmp-739></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp730Component,Cmp731Component,Cmp732Component,Cmp733Component,Cmp734Component,Cmp735Component,Cmp736Component,Cmp737Component,Cmp738Component,Cmp739Component],
  exports: [Comp],
})
export class Module_airplane_team7_mod3 {}

        