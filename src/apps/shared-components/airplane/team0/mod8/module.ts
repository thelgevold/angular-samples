
import {Component, NgModule} from '@angular/core';
import {Cmp80Component} from './cmp0/cmp';
import {Cmp81Component} from './cmp1/cmp';
import {Cmp82Component} from './cmp2/cmp';
import {Cmp83Component} from './cmp3/cmp';
import {Cmp84Component} from './cmp4/cmp';
import {Cmp85Component} from './cmp5/cmp';
import {Cmp86Component} from './cmp6/cmp';
import {Cmp87Component} from './cmp7/cmp';
import {Cmp88Component} from './cmp8/cmp';
import {Cmp89Component} from './cmp9/cmp';
@Component({
  selector: 'team0-mod8',
  template: '<div>team0: <cmp-80></cmp-80><cmp-81></cmp-81><cmp-82></cmp-82><cmp-83></cmp-83><cmp-84></cmp-84><cmp-85></cmp-85><cmp-86></cmp-86><cmp-87></cmp-87><cmp-88></cmp-88><cmp-89></cmp-89></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp80Component,Cmp81Component,Cmp82Component,Cmp83Component,Cmp84Component,Cmp85Component,Cmp86Component,Cmp87Component,Cmp88Component,Cmp89Component],
  exports: [Comp],
})
export class Module_airplane_team0_mod8 {}

        