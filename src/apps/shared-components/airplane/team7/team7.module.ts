
import {Component, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {Module_airplane_team7_mod0} from './mod0/module';
import {Module_airplane_team7_mod1} from './mod1/module';
import {Module_airplane_team7_mod2} from './mod2/module';
import {Module_airplane_team7_mod3} from './mod3/module';
import {Module_airplane_team7_mod4} from './mod4/module';
import {Module_airplane_team7_mod5} from './mod5/module';
import {Module_airplane_team7_mod6} from './mod6/module';
import {Module_airplane_team7_mod7} from './mod7/module';
import {Module_airplane_team7_mod8} from './mod8/module';
import {Module_airplane_team7_mod9} from './mod9/module';

@Component({
  selector: 'team7-nav',
  template: `<team7-mod0></team7-mod0>
<team7-mod1></team7-mod1>
<team7-mod2></team7-mod2>
<team7-mod3></team7-mod3>
<team7-mod4></team7-mod4>
<team7-mod5></team7-mod5>
<team7-mod6></team7-mod6>
<team7-mod7></team7-mod7>
<team7-mod8></team7-mod8>
<team7-mod9></team7-mod9>`,
})
export class Comp {}

@NgModule({
  declarations: [Comp],
  imports: [
    RouterModule.forChild(
    [
      {path: '', component: Comp}
    ]),
    Module_airplane_team7_mod0,Module_airplane_team7_mod1,Module_airplane_team7_mod2,Module_airplane_team7_mod3,Module_airplane_team7_mod4,Module_airplane_team7_mod5,Module_airplane_team7_mod6,Module_airplane_team7_mod7,Module_airplane_team7_mod8,Module_airplane_team7_mod9],
  exports: [Comp],
})
export class Module_airplane_team7
{}
