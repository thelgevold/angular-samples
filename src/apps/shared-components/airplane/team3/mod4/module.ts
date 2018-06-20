
import {Component, NgModule} from '@angular/core';
import {Cmp340Component} from './cmp0/cmp';
import {Cmp341Component} from './cmp1/cmp';
import {Cmp342Component} from './cmp2/cmp';
import {Cmp343Component} from './cmp3/cmp';
import {Cmp344Component} from './cmp4/cmp';
import {Cmp345Component} from './cmp5/cmp';
import {Cmp346Component} from './cmp6/cmp';
import {Cmp347Component} from './cmp7/cmp';
import {Cmp348Component} from './cmp8/cmp';
import {Cmp349Component} from './cmp9/cmp';
@Component({
  selector: 'team3-mod4',
  template: '<div>team3: <cmp-340></cmp-340><cmp-341></cmp-341><cmp-342></cmp-342><cmp-343></cmp-343><cmp-344></cmp-344><cmp-345></cmp-345><cmp-346></cmp-346><cmp-347></cmp-347><cmp-348></cmp-348><cmp-349></cmp-349></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp340Component,Cmp341Component,Cmp342Component,Cmp343Component,Cmp344Component,Cmp345Component,Cmp346Component,Cmp347Component,Cmp348Component,Cmp349Component],
  exports: [Comp],
})
export class Module_airplane_team3_mod4 {}

        