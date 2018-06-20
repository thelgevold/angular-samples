
import {Component, NgModule} from '@angular/core';
import {Cmp440Component} from './cmp0/cmp';
import {Cmp441Component} from './cmp1/cmp';
import {Cmp442Component} from './cmp2/cmp';
import {Cmp443Component} from './cmp3/cmp';
import {Cmp444Component} from './cmp4/cmp';
import {Cmp445Component} from './cmp5/cmp';
import {Cmp446Component} from './cmp6/cmp';
import {Cmp447Component} from './cmp7/cmp';
import {Cmp448Component} from './cmp8/cmp';
import {Cmp449Component} from './cmp9/cmp';
@Component({
  selector: 'team4-mod4',
  template: '<div>team4: <cmp-440></cmp-440><cmp-441></cmp-441><cmp-442></cmp-442><cmp-443></cmp-443><cmp-444></cmp-444><cmp-445></cmp-445><cmp-446></cmp-446><cmp-447></cmp-447><cmp-448></cmp-448><cmp-449></cmp-449></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp440Component,Cmp441Component,Cmp442Component,Cmp443Component,Cmp444Component,Cmp445Component,Cmp446Component,Cmp447Component,Cmp448Component,Cmp449Component],
  exports: [Comp],
})
export class Module_airplane_team4_mod4 {}

        