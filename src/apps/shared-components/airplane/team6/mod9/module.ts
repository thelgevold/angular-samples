
import {Component, NgModule} from '@angular/core';
import {Cmp690Component} from './cmp0/cmp';
import {Cmp691Component} from './cmp1/cmp';
import {Cmp692Component} from './cmp2/cmp';
import {Cmp693Component} from './cmp3/cmp';
import {Cmp694Component} from './cmp4/cmp';
import {Cmp695Component} from './cmp5/cmp';
import {Cmp696Component} from './cmp6/cmp';
import {Cmp697Component} from './cmp7/cmp';
import {Cmp698Component} from './cmp8/cmp';
import {Cmp699Component} from './cmp9/cmp';
@Component({
  selector: 'team6-mod9',
  template: '<div>team6: <cmp-690></cmp-690><cmp-691></cmp-691><cmp-692></cmp-692><cmp-693></cmp-693><cmp-694></cmp-694><cmp-695></cmp-695><cmp-696></cmp-696><cmp-697></cmp-697><cmp-698></cmp-698><cmp-699></cmp-699></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp690Component,Cmp691Component,Cmp692Component,Cmp693Component,Cmp694Component,Cmp695Component,Cmp696Component,Cmp697Component,Cmp698Component,Cmp699Component],
  exports: [Comp],
})
export class Module_airplane_team6_mod9 {}

        