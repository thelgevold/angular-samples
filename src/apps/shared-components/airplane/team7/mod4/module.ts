
import {Component, NgModule} from '@angular/core';
import {Cmp740Component} from './cmp0/cmp';
import {Cmp741Component} from './cmp1/cmp';
import {Cmp742Component} from './cmp2/cmp';
import {Cmp743Component} from './cmp3/cmp';
import {Cmp744Component} from './cmp4/cmp';
import {Cmp745Component} from './cmp5/cmp';
import {Cmp746Component} from './cmp6/cmp';
import {Cmp747Component} from './cmp7/cmp';
import {Cmp748Component} from './cmp8/cmp';
import {Cmp749Component} from './cmp9/cmp';
@Component({
  selector: 'team7-mod4',
  template: '<div>team7: <cmp-740></cmp-740><cmp-741></cmp-741><cmp-742></cmp-742><cmp-743></cmp-743><cmp-744></cmp-744><cmp-745></cmp-745><cmp-746></cmp-746><cmp-747></cmp-747><cmp-748></cmp-748><cmp-749></cmp-749></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp740Component,Cmp741Component,Cmp742Component,Cmp743Component,Cmp744Component,Cmp745Component,Cmp746Component,Cmp747Component,Cmp748Component,Cmp749Component],
  exports: [Comp],
})
export class Module_airplane_team7_mod4 {}

        