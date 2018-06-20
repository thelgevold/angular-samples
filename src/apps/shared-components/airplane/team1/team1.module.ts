
import {Component, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {Module_airplane_team1_mod0} from './mod0/module';
import {Module_airplane_team1_mod1} from './mod1/module';
import {Module_airplane_team1_mod2} from './mod2/module';
import {Module_airplane_team1_mod3} from './mod3/module';
import {Module_airplane_team1_mod4} from './mod4/module';
import {Module_airplane_team1_mod5} from './mod5/module';
import {Module_airplane_team1_mod6} from './mod6/module';
import {Module_airplane_team1_mod7} from './mod7/module';
import {Module_airplane_team1_mod8} from './mod8/module';
import {Module_airplane_team1_mod9} from './mod9/module';

@Component({
  selector: 'team1-nav',
  template: `<team1-mod0></team1-mod0>
<team1-mod1></team1-mod1>
<team1-mod2></team1-mod2>
<team1-mod3></team1-mod3>
<team1-mod4></team1-mod4>
<team1-mod5></team1-mod5>
<team1-mod6></team1-mod6>
<team1-mod7></team1-mod7>
<team1-mod8></team1-mod8>
<team1-mod9></team1-mod9>`,
})
export class Comp {}

@NgModule({
  declarations: [Comp],
  imports: [
    RouterModule.forChild(
    [
        {path: '', component: Comp}
    ]),
    Module_airplane_team1_mod0,Module_airplane_team1_mod1,Module_airplane_team1_mod2,Module_airplane_team1_mod3,Module_airplane_team1_mod4,Module_airplane_team1_mod5,Module_airplane_team1_mod6,Module_airplane_team1_mod7,Module_airplane_team1_mod8,Module_airplane_team1_mod9],
  exports: [Comp],
})
export class Module_airplane_team1
{}
