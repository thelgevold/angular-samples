
import {Component, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {Module_airplane_team4_mod0} from './mod0/module';
import {Module_airplane_team4_mod1} from './mod1/module';
import {Module_airplane_team4_mod2} from './mod2/module';
import {Module_airplane_team4_mod3} from './mod3/module';
import {Module_airplane_team4_mod4} from './mod4/module';
import {Module_airplane_team4_mod5} from './mod5/module';
import {Module_airplane_team4_mod6} from './mod6/module';
import {Module_airplane_team4_mod7} from './mod7/module';
import {Module_airplane_team4_mod8} from './mod8/module';
import {Module_airplane_team4_mod9} from './mod9/module';

@Component({
  selector: 'team4-nav',
  template: `<team4-mod0></team4-mod0>
<team4-mod1></team4-mod1>
<team4-mod2></team4-mod2>
<team4-mod3></team4-mod3>
<team4-mod4></team4-mod4>
<team4-mod5></team4-mod5>
<team4-mod6></team4-mod6>
<team4-mod7></team4-mod7>
<team4-mod8></team4-mod8>
<team4-mod9></team4-mod9>`,
})
export class Comp {}

@NgModule({
  declarations: [Comp],
  imports: [
    RouterModule.forChild(
    [
      {path: '', component: Comp}
    ]),
    Module_airplane_team4_mod0,Module_airplane_team4_mod1,Module_airplane_team4_mod2,Module_airplane_team4_mod3,Module_airplane_team4_mod4,Module_airplane_team4_mod5,Module_airplane_team4_mod6,Module_airplane_team4_mod7,Module_airplane_team4_mod8,Module_airplane_team4_mod9],
  exports: [Comp],
})
export class Module_airplane_team4
{}
