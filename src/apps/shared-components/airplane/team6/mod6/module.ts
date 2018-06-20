
import {Component, NgModule} from '@angular/core';
import {Cmp660Component} from './cmp0/cmp';
import {Cmp661Component} from './cmp1/cmp';
import {Cmp662Component} from './cmp2/cmp';
import {Cmp663Component} from './cmp3/cmp';
import {Cmp664Component} from './cmp4/cmp';
import {Cmp665Component} from './cmp5/cmp';
import {Cmp666Component} from './cmp6/cmp';
import {Cmp667Component} from './cmp7/cmp';
import {Cmp668Component} from './cmp8/cmp';
import {Cmp669Component} from './cmp9/cmp';
@Component({
  selector: 'team6-mod6',
  template: '<div>team6: <cmp-660></cmp-660><cmp-661></cmp-661><cmp-662></cmp-662><cmp-663></cmp-663><cmp-664></cmp-664><cmp-665></cmp-665><cmp-666></cmp-666><cmp-667></cmp-667><cmp-668></cmp-668><cmp-669></cmp-669></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp660Component,Cmp661Component,Cmp662Component,Cmp663Component,Cmp664Component,Cmp665Component,Cmp666Component,Cmp667Component,Cmp668Component,Cmp669Component],
  exports: [Comp],
})
export class Module_airplane_team6_mod6 {}

        