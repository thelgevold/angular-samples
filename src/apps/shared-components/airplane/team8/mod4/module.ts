
import {Component, NgModule} from '@angular/core';
import {Cmp840Component} from './cmp0/cmp';
import {Cmp841Component} from './cmp1/cmp';
import {Cmp842Component} from './cmp2/cmp';
import {Cmp843Component} from './cmp3/cmp';
import {Cmp844Component} from './cmp4/cmp';
import {Cmp845Component} from './cmp5/cmp';
import {Cmp846Component} from './cmp6/cmp';
import {Cmp847Component} from './cmp7/cmp';
import {Cmp848Component} from './cmp8/cmp';
import {Cmp849Component} from './cmp9/cmp';
@Component({
  selector: 'team8-mod4',
  template: '<div>team8: <cmp-840></cmp-840><cmp-841></cmp-841><cmp-842></cmp-842><cmp-843></cmp-843><cmp-844></cmp-844><cmp-845></cmp-845><cmp-846></cmp-846><cmp-847></cmp-847><cmp-848></cmp-848><cmp-849></cmp-849></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp840Component,Cmp841Component,Cmp842Component,Cmp843Component,Cmp844Component,Cmp845Component,Cmp846Component,Cmp847Component,Cmp848Component,Cmp849Component],
  exports: [Comp],
})
export class Module_airplane_team8_mod4 {}

        