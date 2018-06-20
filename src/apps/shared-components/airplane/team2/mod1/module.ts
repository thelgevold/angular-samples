
import {Component, NgModule} from '@angular/core';
import {Cmp210Component} from './cmp0/cmp';
import {Cmp211Component} from './cmp1/cmp';
import {Cmp212Component} from './cmp2/cmp';
import {Cmp213Component} from './cmp3/cmp';
import {Cmp214Component} from './cmp4/cmp';
import {Cmp215Component} from './cmp5/cmp';
import {Cmp216Component} from './cmp6/cmp';
import {Cmp217Component} from './cmp7/cmp';
import {Cmp218Component} from './cmp8/cmp';
import {Cmp219Component} from './cmp9/cmp';
@Component({
  selector: 'team2-mod1',
  template: '<div>team2: <cmp-210></cmp-210><cmp-211></cmp-211><cmp-212></cmp-212><cmp-213></cmp-213><cmp-214></cmp-214><cmp-215></cmp-215><cmp-216></cmp-216><cmp-217></cmp-217><cmp-218></cmp-218><cmp-219></cmp-219></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp210Component,Cmp211Component,Cmp212Component,Cmp213Component,Cmp214Component,Cmp215Component,Cmp216Component,Cmp217Component,Cmp218Component,Cmp219Component],
  exports: [Comp],
})
export class Module_airplane_team2_mod1 {}

        