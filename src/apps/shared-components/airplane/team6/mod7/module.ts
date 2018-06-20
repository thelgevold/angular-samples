
import {Component, NgModule} from '@angular/core';
import {Cmp670Component} from './cmp0/cmp';
import {Cmp671Component} from './cmp1/cmp';
import {Cmp672Component} from './cmp2/cmp';
import {Cmp673Component} from './cmp3/cmp';
import {Cmp674Component} from './cmp4/cmp';
import {Cmp675Component} from './cmp5/cmp';
import {Cmp676Component} from './cmp6/cmp';
import {Cmp677Component} from './cmp7/cmp';
import {Cmp678Component} from './cmp8/cmp';
import {Cmp679Component} from './cmp9/cmp';
@Component({
  selector: 'team6-mod7',
  template: '<div>team6: <cmp-670></cmp-670><cmp-671></cmp-671><cmp-672></cmp-672><cmp-673></cmp-673><cmp-674></cmp-674><cmp-675></cmp-675><cmp-676></cmp-676><cmp-677></cmp-677><cmp-678></cmp-678><cmp-679></cmp-679></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp670Component,Cmp671Component,Cmp672Component,Cmp673Component,Cmp674Component,Cmp675Component,Cmp676Component,Cmp677Component,Cmp678Component,Cmp679Component],
  exports: [Comp],
})
export class Module_airplane_team6_mod7 {}

        