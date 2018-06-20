
import {Component, NgModule} from '@angular/core';
import {Cmp40Component} from './cmp0/cmp';
import {Cmp41Component} from './cmp1/cmp';
import {Cmp42Component} from './cmp2/cmp';
import {Cmp43Component} from './cmp3/cmp';
import {Cmp44Component} from './cmp4/cmp';
import {Cmp45Component} from './cmp5/cmp';
import {Cmp46Component} from './cmp6/cmp';
import {Cmp47Component} from './cmp7/cmp';
import {Cmp48Component} from './cmp8/cmp';
import {Cmp49Component} from './cmp9/cmp';
@Component({
  selector: 'team0-mod4',
  template: '<div>team0: <cmp-40></cmp-40><cmp-41></cmp-41><cmp-42></cmp-42><cmp-43></cmp-43><cmp-44></cmp-44><cmp-45></cmp-45><cmp-46></cmp-46><cmp-47></cmp-47><cmp-48></cmp-48><cmp-49></cmp-49></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp40Component,Cmp41Component,Cmp42Component,Cmp43Component,Cmp44Component,Cmp45Component,Cmp46Component,Cmp47Component,Cmp48Component,Cmp49Component],
  exports: [Comp],
})
export class Module_airplane_team0_mod4 {}

        