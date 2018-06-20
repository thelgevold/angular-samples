
import {Component, NgModule} from '@angular/core';
import {Cmp380Component} from './cmp0/cmp';
import {Cmp381Component} from './cmp1/cmp';
import {Cmp382Component} from './cmp2/cmp';
import {Cmp383Component} from './cmp3/cmp';
import {Cmp384Component} from './cmp4/cmp';
import {Cmp385Component} from './cmp5/cmp';
import {Cmp386Component} from './cmp6/cmp';
import {Cmp387Component} from './cmp7/cmp';
import {Cmp388Component} from './cmp8/cmp';
import {Cmp389Component} from './cmp9/cmp';
@Component({
  selector: 'team3-mod8',
  template: '<div>team3: <cmp-380></cmp-380><cmp-381></cmp-381><cmp-382></cmp-382><cmp-383></cmp-383><cmp-384></cmp-384><cmp-385></cmp-385><cmp-386></cmp-386><cmp-387></cmp-387><cmp-388></cmp-388><cmp-389></cmp-389></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp380Component,Cmp381Component,Cmp382Component,Cmp383Component,Cmp384Component,Cmp385Component,Cmp386Component,Cmp387Component,Cmp388Component,Cmp389Component],
  exports: [Comp],
})
export class Module_airplane_team3_mod8 {}

        