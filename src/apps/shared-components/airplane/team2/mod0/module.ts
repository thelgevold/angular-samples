
import {Component, NgModule} from '@angular/core';
import {Cmp200Component} from './cmp0/cmp';
import {Cmp201Component} from './cmp1/cmp';
import {Cmp202Component} from './cmp2/cmp';
import {Cmp203Component} from './cmp3/cmp';
import {Cmp204Component} from './cmp4/cmp';
import {Cmp205Component} from './cmp5/cmp';
import {Cmp206Component} from './cmp6/cmp';
import {Cmp207Component} from './cmp7/cmp';
import {Cmp208Component} from './cmp8/cmp';
import {Cmp209Component} from './cmp9/cmp';
@Component({
  selector: 'team2-mod0',
  template: '<div>team2: <cmp-200></cmp-200><cmp-201></cmp-201><cmp-202></cmp-202><cmp-203></cmp-203><cmp-204></cmp-204><cmp-205></cmp-205><cmp-206></cmp-206><cmp-207></cmp-207><cmp-208></cmp-208><cmp-209></cmp-209></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp200Component,Cmp201Component,Cmp202Component,Cmp203Component,Cmp204Component,Cmp205Component,Cmp206Component,Cmp207Component,Cmp208Component,Cmp209Component],
  exports: [Comp],
})
export class Module_airplane_team2_mod0 {}

        