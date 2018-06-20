
import {Component, NgModule} from '@angular/core';
import {Cmp530Component} from './cmp0/cmp';
import {Cmp531Component} from './cmp1/cmp';
import {Cmp532Component} from './cmp2/cmp';
import {Cmp533Component} from './cmp3/cmp';
import {Cmp534Component} from './cmp4/cmp';
import {Cmp535Component} from './cmp5/cmp';
import {Cmp536Component} from './cmp6/cmp';
import {Cmp537Component} from './cmp7/cmp';
import {Cmp538Component} from './cmp8/cmp';
import {Cmp539Component} from './cmp9/cmp';
@Component({
  selector: 'team5-mod3',
  template: '<div>team5: <cmp-530></cmp-530><cmp-531></cmp-531><cmp-532></cmp-532><cmp-533></cmp-533><cmp-534></cmp-534><cmp-535></cmp-535><cmp-536></cmp-536><cmp-537></cmp-537><cmp-538></cmp-538><cmp-539></cmp-539></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp530Component,Cmp531Component,Cmp532Component,Cmp533Component,Cmp534Component,Cmp535Component,Cmp536Component,Cmp537Component,Cmp538Component,Cmp539Component],
  exports: [Comp],
})
export class Module_airplane_team5_mod3 {}

        