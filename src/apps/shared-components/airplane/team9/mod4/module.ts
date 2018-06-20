
import {Component, NgModule} from '@angular/core';
import {Cmp940Component} from './cmp0/cmp';
import {Cmp941Component} from './cmp1/cmp';
import {Cmp942Component} from './cmp2/cmp';
import {Cmp943Component} from './cmp3/cmp';
import {Cmp944Component} from './cmp4/cmp';
import {Cmp945Component} from './cmp5/cmp';
import {Cmp946Component} from './cmp6/cmp';
import {Cmp947Component} from './cmp7/cmp';
import {Cmp948Component} from './cmp8/cmp';
import {Cmp949Component} from './cmp9/cmp';
@Component({
  selector: 'team9-mod4',
  template: '<div>team9: <cmp-940></cmp-940><cmp-941></cmp-941><cmp-942></cmp-942><cmp-943></cmp-943><cmp-944></cmp-944><cmp-945></cmp-945><cmp-946></cmp-946><cmp-947></cmp-947><cmp-948></cmp-948><cmp-949></cmp-949></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp940Component,Cmp941Component,Cmp942Component,Cmp943Component,Cmp944Component,Cmp945Component,Cmp946Component,Cmp947Component,Cmp948Component,Cmp949Component],
  exports: [Comp],
})
export class Module_airplane_team9_mod4 {}

        