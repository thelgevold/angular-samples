
import {Component, NgModule} from '@angular/core';
import {Cmp930Component} from './cmp0/cmp';
import {Cmp931Component} from './cmp1/cmp';
import {Cmp932Component} from './cmp2/cmp';
import {Cmp933Component} from './cmp3/cmp';
import {Cmp934Component} from './cmp4/cmp';
import {Cmp935Component} from './cmp5/cmp';
import {Cmp936Component} from './cmp6/cmp';
import {Cmp937Component} from './cmp7/cmp';
import {Cmp938Component} from './cmp8/cmp';
import {Cmp939Component} from './cmp9/cmp';
@Component({
  selector: 'team9-mod3',
  template: '<div>team9: <cmp-930></cmp-930><cmp-931></cmp-931><cmp-932></cmp-932><cmp-933></cmp-933><cmp-934></cmp-934><cmp-935></cmp-935><cmp-936></cmp-936><cmp-937></cmp-937><cmp-938></cmp-938><cmp-939></cmp-939></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp930Component,Cmp931Component,Cmp932Component,Cmp933Component,Cmp934Component,Cmp935Component,Cmp936Component,Cmp937Component,Cmp938Component,Cmp939Component],
  exports: [Comp],
})
export class Module_airplane_team9_mod3 {}

        