
import {Component, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {Module_airplane_team2_mod0} from './mod0/module';
import {Module_airplane_team2_mod1} from './mod1/module';
import {Module_airplane_team2_mod2} from './mod2/module';
import {Module_airplane_team2_mod3} from './mod3/module';
import {Module_airplane_team2_mod4} from './mod4/module';
import {Module_airplane_team2_mod5} from './mod5/module';
import {Module_airplane_team2_mod6} from './mod6/module';
import {Module_airplane_team2_mod7} from './mod7/module';
import {Module_airplane_team2_mod8} from './mod8/module';
import {Module_airplane_team2_mod9} from './mod9/module';

@Component({
  selector: 'team2-nav',
  template: `<team2-mod0></team2-mod0>
<team2-mod1></team2-mod1>
<team2-mod2></team2-mod2>
<team2-mod3></team2-mod3>
<team2-mod4></team2-mod4>
<team2-mod5></team2-mod5>
<team2-mod6></team2-mod6>
<team2-mod7></team2-mod7>
<team2-mod8></team2-mod8>
<team2-mod9></team2-mod9>`,
})
export class Comp {}

@NgModule({
  declarations: [Comp],
  imports: [
    RouterModule.forChild(
    [
      {path: '', component: Comp}
    ]),
    Module_airplane_team2_mod0,Module_airplane_team2_mod1,Module_airplane_team2_mod2,Module_airplane_team2_mod3,Module_airplane_team2_mod4,Module_airplane_team2_mod5,Module_airplane_team2_mod6,Module_airplane_team2_mod7,Module_airplane_team2_mod8,Module_airplane_team2_mod9],
  exports: [Comp],
})
export class Module_airplane_team2
{}
