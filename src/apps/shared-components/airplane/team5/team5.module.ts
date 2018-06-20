
import {Component, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {Module_airplane_team5_mod0} from './mod0/module';
import {Module_airplane_team5_mod1} from './mod1/module';
import {Module_airplane_team5_mod2} from './mod2/module';
import {Module_airplane_team5_mod3} from './mod3/module';
import {Module_airplane_team5_mod4} from './mod4/module';
import {Module_airplane_team5_mod5} from './mod5/module';
import {Module_airplane_team5_mod6} from './mod6/module';
import {Module_airplane_team5_mod7} from './mod7/module';
import {Module_airplane_team5_mod8} from './mod8/module';
import {Module_airplane_team5_mod9} from './mod9/module';

@Component({
  selector: 'team5-nav',
  template: `<team5-mod0></team5-mod0>
<team5-mod1></team5-mod1>
<team5-mod2></team5-mod2>
<team5-mod3></team5-mod3>
<team5-mod4></team5-mod4>
<team5-mod5></team5-mod5>
<team5-mod6></team5-mod6>
<team5-mod7></team5-mod7>
<team5-mod8></team5-mod8>
<team5-mod9></team5-mod9>`,
})
export class Comp {}

@NgModule({
  declarations: [Comp],
  imports: [
    RouterModule.forChild(
    [
      {path: '', component: Comp}
    ]),
    Module_airplane_team5_mod0,Module_airplane_team5_mod1,Module_airplane_team5_mod2,Module_airplane_team5_mod3,Module_airplane_team5_mod4,Module_airplane_team5_mod5,Module_airplane_team5_mod6,Module_airplane_team5_mod7,Module_airplane_team5_mod8,Module_airplane_team5_mod9],
  exports: [Comp],
})
export class Module_airplane_team5
{}
