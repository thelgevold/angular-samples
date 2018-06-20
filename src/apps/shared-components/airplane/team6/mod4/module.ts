
import {Component, NgModule} from '@angular/core';
import {Cmp640Component} from './cmp0/cmp';
import {Cmp641Component} from './cmp1/cmp';
import {Cmp642Component} from './cmp2/cmp';
import {Cmp643Component} from './cmp3/cmp';
import {Cmp644Component} from './cmp4/cmp';
import {Cmp645Component} from './cmp5/cmp';
import {Cmp646Component} from './cmp6/cmp';
import {Cmp647Component} from './cmp7/cmp';
import {Cmp648Component} from './cmp8/cmp';
import {Cmp649Component} from './cmp9/cmp';
@Component({
  selector: 'team6-mod4',
  template: '<div>team6: <cmp-640></cmp-640><cmp-641></cmp-641><cmp-642></cmp-642><cmp-643></cmp-643><cmp-644></cmp-644><cmp-645></cmp-645><cmp-646></cmp-646><cmp-647></cmp-647><cmp-648></cmp-648><cmp-649></cmp-649></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp640Component,Cmp641Component,Cmp642Component,Cmp643Component,Cmp644Component,Cmp645Component,Cmp646Component,Cmp647Component,Cmp648Component,Cmp649Component],
  exports: [Comp],
})
export class Module_airplane_team6_mod4 {}

        