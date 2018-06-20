
import {Component, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {Module_airplane_team8_mod0} from './mod0/module';
import {Module_airplane_team8_mod1} from './mod1/module';
import {Module_airplane_team8_mod2} from './mod2/module';
import {Module_airplane_team8_mod3} from './mod3/module';
import {Module_airplane_team8_mod4} from './mod4/module';
import {Module_airplane_team8_mod5} from './mod5/module';
import {Module_airplane_team8_mod6} from './mod6/module';
import {Module_airplane_team8_mod7} from './mod7/module';
import {Module_airplane_team8_mod8} from './mod8/module';
import {Module_airplane_team8_mod9} from './mod9/module';

@Component({
  selector: 'team8-nav',
  template: `<team8-mod0></team8-mod0>
<team8-mod1></team8-mod1>
<team8-mod2></team8-mod2>
<team8-mod3></team8-mod3>
<team8-mod4></team8-mod4>
<team8-mod5></team8-mod5>
<team8-mod6></team8-mod6>
<team8-mod7></team8-mod7>
<team8-mod8></team8-mod8>
<team8-mod9></team8-mod9>`,
})
export class Comp {}

@NgModule({
  declarations: [Comp],
  imports: [
    RouterModule.forChild(
    [
      {path: '', component: Comp}
    ]),
    Module_airplane_team8_mod0,Module_airplane_team8_mod1,Module_airplane_team8_mod2,Module_airplane_team8_mod3,Module_airplane_team8_mod4,Module_airplane_team8_mod5,Module_airplane_team8_mod6,Module_airplane_team8_mod7,Module_airplane_team8_mod8,Module_airplane_team8_mod9],
  exports: [Comp],
})
export class Module_airplane_team8
{}
