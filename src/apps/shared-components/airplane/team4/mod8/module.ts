
import {Component, NgModule} from '@angular/core';
import {Cmp480Component} from './cmp0/cmp';
import {Cmp481Component} from './cmp1/cmp';
import {Cmp482Component} from './cmp2/cmp';
import {Cmp483Component} from './cmp3/cmp';
import {Cmp484Component} from './cmp4/cmp';
import {Cmp485Component} from './cmp5/cmp';
import {Cmp486Component} from './cmp6/cmp';
import {Cmp487Component} from './cmp7/cmp';
import {Cmp488Component} from './cmp8/cmp';
import {Cmp489Component} from './cmp9/cmp';
@Component({
  selector: 'team4-mod8',
  template: '<div>team4: <cmp-480></cmp-480><cmp-481></cmp-481><cmp-482></cmp-482><cmp-483></cmp-483><cmp-484></cmp-484><cmp-485></cmp-485><cmp-486></cmp-486><cmp-487></cmp-487><cmp-488></cmp-488><cmp-489></cmp-489></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp480Component,Cmp481Component,Cmp482Component,Cmp483Component,Cmp484Component,Cmp485Component,Cmp486Component,Cmp487Component,Cmp488Component,Cmp489Component],
  exports: [Comp],
})
export class Module_airplane_team4_mod8 {}

        