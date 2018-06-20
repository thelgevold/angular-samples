
import {Component, NgModule} from '@angular/core';
import {Cmp160Component} from './cmp0/cmp';
import {Cmp161Component} from './cmp1/cmp';
import {Cmp162Component} from './cmp2/cmp';
import {Cmp163Component} from './cmp3/cmp';
import {Cmp164Component} from './cmp4/cmp';
import {Cmp165Component} from './cmp5/cmp';
import {Cmp166Component} from './cmp6/cmp';
import {Cmp167Component} from './cmp7/cmp';
import {Cmp168Component} from './cmp8/cmp';
import {Cmp169Component} from './cmp9/cmp';
@Component({
  selector: 'team1-mod6',
  template: '<div>team1: <cmp-160></cmp-160><cmp-161></cmp-161><cmp-162></cmp-162><cmp-163></cmp-163><cmp-164></cmp-164><cmp-165></cmp-165><cmp-166></cmp-166><cmp-167></cmp-167><cmp-168></cmp-168><cmp-169></cmp-169></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp160Component,Cmp161Component,Cmp162Component,Cmp163Component,Cmp164Component,Cmp165Component,Cmp166Component,Cmp167Component,Cmp168Component,Cmp169Component],
  exports: [Comp],
})
export class Module_airplane_team1_mod6 {}

        