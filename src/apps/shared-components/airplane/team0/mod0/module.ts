
import {Component, NgModule} from '@angular/core';
import {Cmp0Component} from './cmp0/cmp';
import {Cmp1Component} from './cmp1/cmp';
import {Cmp2Component} from './cmp2/cmp';
import {Cmp3Component} from './cmp3/cmp';
import {Cmp4Component} from './cmp4/cmp';
import {Cmp5Component} from './cmp5/cmp';
import {Cmp6Component} from './cmp6/cmp';
import {Cmp7Component} from './cmp7/cmp';
import {Cmp8Component} from './cmp8/cmp';
import {Cmp9Component} from './cmp9/cmp';
@Component({
  selector: 'team0-mod0',
  template: '<div>team0: <cmp-0></cmp-0><cmp-1></cmp-1><cmp-2></cmp-2><cmp-3></cmp-3><cmp-4></cmp-4><cmp-5></cmp-5><cmp-6></cmp-6><cmp-7></cmp-7><cmp-8></cmp-8><cmp-9></cmp-9></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp0Component,Cmp1Component,Cmp2Component,Cmp3Component,Cmp4Component,Cmp5Component,Cmp6Component,Cmp7Component,Cmp8Component,Cmp9Component],
  exports: [Comp],
})
export class Module_airplane_team0_mod0 {}

        