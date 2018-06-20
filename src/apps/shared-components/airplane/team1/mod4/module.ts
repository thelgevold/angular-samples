
import {Component, NgModule} from '@angular/core';
import {Cmp140Component} from './cmp0/cmp';
import {Cmp141Component} from './cmp1/cmp';
import {Cmp142Component} from './cmp2/cmp';
import {Cmp143Component} from './cmp3/cmp';
import {Cmp144Component} from './cmp4/cmp';
import {Cmp145Component} from './cmp5/cmp';
import {Cmp146Component} from './cmp6/cmp';
import {Cmp147Component} from './cmp7/cmp';
import {Cmp148Component} from './cmp8/cmp';
import {Cmp149Component} from './cmp9/cmp';
@Component({
  selector: 'team1-mod4',
  template: '<div>team1: <cmp-140></cmp-140><cmp-141></cmp-141><cmp-142></cmp-142><cmp-143></cmp-143><cmp-144></cmp-144><cmp-145></cmp-145><cmp-146></cmp-146><cmp-147></cmp-147><cmp-148></cmp-148><cmp-149></cmp-149></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp140Component,Cmp141Component,Cmp142Component,Cmp143Component,Cmp144Component,Cmp145Component,Cmp146Component,Cmp147Component,Cmp148Component,Cmp149Component],
  exports: [Comp],
})
export class Module_airplane_team1_mod4 {}

        