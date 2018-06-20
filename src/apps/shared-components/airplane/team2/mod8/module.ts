
import {Component, NgModule} from '@angular/core';
import {Cmp280Component} from './cmp0/cmp';
import {Cmp281Component} from './cmp1/cmp';
import {Cmp282Component} from './cmp2/cmp';
import {Cmp283Component} from './cmp3/cmp';
import {Cmp284Component} from './cmp4/cmp';
import {Cmp285Component} from './cmp5/cmp';
import {Cmp286Component} from './cmp6/cmp';
import {Cmp287Component} from './cmp7/cmp';
import {Cmp288Component} from './cmp8/cmp';
import {Cmp289Component} from './cmp9/cmp';
@Component({
  selector: 'team2-mod8',
  template: '<div>team2: <cmp-280></cmp-280><cmp-281></cmp-281><cmp-282></cmp-282><cmp-283></cmp-283><cmp-284></cmp-284><cmp-285></cmp-285><cmp-286></cmp-286><cmp-287></cmp-287><cmp-288></cmp-288><cmp-289></cmp-289></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp280Component,Cmp281Component,Cmp282Component,Cmp283Component,Cmp284Component,Cmp285Component,Cmp286Component,Cmp287Component,Cmp288Component,Cmp289Component],
  exports: [Comp],
})
export class Module_airplane_team2_mod8 {}

        