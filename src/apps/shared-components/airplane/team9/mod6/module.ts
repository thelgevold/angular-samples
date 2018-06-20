
import {Component, NgModule} from '@angular/core';
import {Cmp960Component} from './cmp0/cmp';
import {Cmp961Component} from './cmp1/cmp';
import {Cmp962Component} from './cmp2/cmp';
import {Cmp963Component} from './cmp3/cmp';
import {Cmp964Component} from './cmp4/cmp';
import {Cmp965Component} from './cmp5/cmp';
import {Cmp966Component} from './cmp6/cmp';
import {Cmp967Component} from './cmp7/cmp';
import {Cmp968Component} from './cmp8/cmp';
import {Cmp969Component} from './cmp9/cmp';
@Component({
  selector: 'team9-mod6',
  template: '<div>team9: <cmp-960></cmp-960><cmp-961></cmp-961><cmp-962></cmp-962><cmp-963></cmp-963><cmp-964></cmp-964><cmp-965></cmp-965><cmp-966></cmp-966><cmp-967></cmp-967><cmp-968></cmp-968><cmp-969></cmp-969></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp960Component,Cmp961Component,Cmp962Component,Cmp963Component,Cmp964Component,Cmp965Component,Cmp966Component,Cmp967Component,Cmp968Component,Cmp969Component],
  exports: [Comp],
})
export class Module_airplane_team9_mod6 {}

        