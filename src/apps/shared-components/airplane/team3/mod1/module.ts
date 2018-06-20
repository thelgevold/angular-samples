
import {Component, NgModule} from '@angular/core';
import {Cmp310Component} from './cmp0/cmp';
import {Cmp311Component} from './cmp1/cmp';
import {Cmp312Component} from './cmp2/cmp';
import {Cmp313Component} from './cmp3/cmp';
import {Cmp314Component} from './cmp4/cmp';
import {Cmp315Component} from './cmp5/cmp';
import {Cmp316Component} from './cmp6/cmp';
import {Cmp317Component} from './cmp7/cmp';
import {Cmp318Component} from './cmp8/cmp';
import {Cmp319Component} from './cmp9/cmp';
@Component({
  selector: 'team3-mod1',
  template: '<div>team3: <cmp-310></cmp-310><cmp-311></cmp-311><cmp-312></cmp-312><cmp-313></cmp-313><cmp-314></cmp-314><cmp-315></cmp-315><cmp-316></cmp-316><cmp-317></cmp-317><cmp-318></cmp-318><cmp-319></cmp-319></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp310Component,Cmp311Component,Cmp312Component,Cmp313Component,Cmp314Component,Cmp315Component,Cmp316Component,Cmp317Component,Cmp318Component,Cmp319Component],
  exports: [Comp],
})
export class Module_airplane_team3_mod1 {}

        