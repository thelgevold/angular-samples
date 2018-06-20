
import {Component, NgModule} from '@angular/core';
import {Cmp570Component} from './cmp0/cmp';
import {Cmp571Component} from './cmp1/cmp';
import {Cmp572Component} from './cmp2/cmp';
import {Cmp573Component} from './cmp3/cmp';
import {Cmp574Component} from './cmp4/cmp';
import {Cmp575Component} from './cmp5/cmp';
import {Cmp576Component} from './cmp6/cmp';
import {Cmp577Component} from './cmp7/cmp';
import {Cmp578Component} from './cmp8/cmp';
import {Cmp579Component} from './cmp9/cmp';
@Component({
  selector: 'team5-mod7',
  template: '<div>team5: <cmp-570></cmp-570><cmp-571></cmp-571><cmp-572></cmp-572><cmp-573></cmp-573><cmp-574></cmp-574><cmp-575></cmp-575><cmp-576></cmp-576><cmp-577></cmp-577><cmp-578></cmp-578><cmp-579></cmp-579></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp570Component,Cmp571Component,Cmp572Component,Cmp573Component,Cmp574Component,Cmp575Component,Cmp576Component,Cmp577Component,Cmp578Component,Cmp579Component],
  exports: [Comp],
})
export class Module_airplane_team5_mod7 {}

        