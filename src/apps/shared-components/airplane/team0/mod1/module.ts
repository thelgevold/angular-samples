
import {Component, NgModule} from '@angular/core';
import {Cmp10Component} from './cmp0/cmp';
import {Cmp11Component} from './cmp1/cmp';
import {Cmp12Component} from './cmp2/cmp';
import {Cmp13Component} from './cmp3/cmp';
import {Cmp14Component} from './cmp4/cmp';
import {Cmp15Component} from './cmp5/cmp';
import {Cmp16Component} from './cmp6/cmp';
import {Cmp17Component} from './cmp7/cmp';
import {Cmp18Component} from './cmp8/cmp';
import {Cmp19Component} from './cmp9/cmp';
@Component({
  selector: 'team0-mod1',
  template: '<div>team0: <cmp-10></cmp-10><cmp-11></cmp-11><cmp-12></cmp-12><cmp-13></cmp-13><cmp-14></cmp-14><cmp-15></cmp-15><cmp-16></cmp-16><cmp-17></cmp-17><cmp-18></cmp-18><cmp-19></cmp-19></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp10Component,Cmp11Component,Cmp12Component,Cmp13Component,Cmp14Component,Cmp15Component,Cmp16Component,Cmp17Component,Cmp18Component,Cmp19Component],
  exports: [Comp],
})
export class Module_airplane_team0_mod1 {}

        