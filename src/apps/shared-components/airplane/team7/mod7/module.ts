
import {Component, NgModule} from '@angular/core';
import {Cmp770Component} from './cmp0/cmp';
import {Cmp771Component} from './cmp1/cmp';
import {Cmp772Component} from './cmp2/cmp';
import {Cmp773Component} from './cmp3/cmp';
import {Cmp774Component} from './cmp4/cmp';
import {Cmp775Component} from './cmp5/cmp';
import {Cmp776Component} from './cmp6/cmp';
import {Cmp777Component} from './cmp7/cmp';
import {Cmp778Component} from './cmp8/cmp';
import {Cmp779Component} from './cmp9/cmp';
@Component({
  selector: 'team7-mod7',
  template: '<div>team7: <cmp-770></cmp-770><cmp-771></cmp-771><cmp-772></cmp-772><cmp-773></cmp-773><cmp-774></cmp-774><cmp-775></cmp-775><cmp-776></cmp-776><cmp-777></cmp-777><cmp-778></cmp-778><cmp-779></cmp-779></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp770Component,Cmp771Component,Cmp772Component,Cmp773Component,Cmp774Component,Cmp775Component,Cmp776Component,Cmp777Component,Cmp778Component,Cmp779Component],
  exports: [Comp],
})
export class Module_airplane_team7_mod7 {}

        