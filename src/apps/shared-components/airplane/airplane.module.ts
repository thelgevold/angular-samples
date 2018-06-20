import {NgModule} from '@angular/core';

import {Module_airplane_team0} from './team0/team0.module';
import {Module_airplane_team1} from './team1/team1.module';
import {Module_airplane_team2} from './team2/team2.module';
import {Module_airplane_team3} from './team3/team3.module';
import {Module_airplane_team4} from './team4/team4.module';
import {Module_airplane_team5} from './team5/team5.module';
import {Module_airplane_team6} from './team6/team6.module';
import {Module_airplane_team7} from './team7/team7.module';
import {Module_airplane_team8} from './team8/team8.module';
import {Module_airplane_team9} from './team9/team9.module';

import {AirplaneComponent} from './airplane.component';

@NgModule({
  imports: [
    Module_airplane_team0,
    Module_airplane_team1,
    Module_airplane_team2,
    Module_airplane_team3,
    Module_airplane_team4,
    Module_airplane_team5,
    Module_airplane_team6,
    Module_airplane_team7,
    Module_airplane_team8,
    Module_airplane_team9,
  ],
  declarations: [AirplaneComponent],
  exports: [AirplaneComponent],
})
export class AirplaneModule {}
