
import {Component, NgModule} from '@angular/core';
import {Cmp520Component} from './cmp0/cmp';
import {Cmp521Component} from './cmp1/cmp';
import {Cmp522Component} from './cmp2/cmp';
import {Cmp523Component} from './cmp3/cmp';
import {Cmp524Component} from './cmp4/cmp';
import {Cmp525Component} from './cmp5/cmp';
import {Cmp526Component} from './cmp6/cmp';
import {Cmp527Component} from './cmp7/cmp';
import {Cmp528Component} from './cmp8/cmp';
import {Cmp529Component} from './cmp9/cmp';
@Component({
  selector: 'team5-mod2',
  template: '<div>team5: <cmp-520></cmp-520><cmp-521></cmp-521><cmp-522></cmp-522><cmp-523></cmp-523><cmp-524></cmp-524><cmp-525></cmp-525><cmp-526></cmp-526><cmp-527></cmp-527><cmp-528></cmp-528><cmp-529></cmp-529></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp520Component,Cmp521Component,Cmp522Component,Cmp523Component,Cmp524Component,Cmp525Component,Cmp526Component,Cmp527Component,Cmp528Component,Cmp529Component],
  exports: [Comp],
})
export class Module_airplane_team5_mod2 {}

        