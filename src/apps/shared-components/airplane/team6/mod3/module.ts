
import {Component, NgModule} from '@angular/core';
import {Cmp630Component} from './cmp0/cmp';
import {Cmp631Component} from './cmp1/cmp';
import {Cmp632Component} from './cmp2/cmp';
import {Cmp633Component} from './cmp3/cmp';
import {Cmp634Component} from './cmp4/cmp';
import {Cmp635Component} from './cmp5/cmp';
import {Cmp636Component} from './cmp6/cmp';
import {Cmp637Component} from './cmp7/cmp';
import {Cmp638Component} from './cmp8/cmp';
import {Cmp639Component} from './cmp9/cmp';
@Component({
  selector: 'team6-mod3',
  template: '<div>team6: <cmp-630></cmp-630><cmp-631></cmp-631><cmp-632></cmp-632><cmp-633></cmp-633><cmp-634></cmp-634><cmp-635></cmp-635><cmp-636></cmp-636><cmp-637></cmp-637><cmp-638></cmp-638><cmp-639></cmp-639></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp630Component,Cmp631Component,Cmp632Component,Cmp633Component,Cmp634Component,Cmp635Component,Cmp636Component,Cmp637Component,Cmp638Component,Cmp639Component],
  exports: [Comp],
})
export class Module_airplane_team6_mod3 {}

        