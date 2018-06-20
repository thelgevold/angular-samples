
import {Component, NgModule} from '@angular/core';
import {Cmp270Component} from './cmp0/cmp';
import {Cmp271Component} from './cmp1/cmp';
import {Cmp272Component} from './cmp2/cmp';
import {Cmp273Component} from './cmp3/cmp';
import {Cmp274Component} from './cmp4/cmp';
import {Cmp275Component} from './cmp5/cmp';
import {Cmp276Component} from './cmp6/cmp';
import {Cmp277Component} from './cmp7/cmp';
import {Cmp278Component} from './cmp8/cmp';
import {Cmp279Component} from './cmp9/cmp';
@Component({
  selector: 'team2-mod7',
  template: '<div>team2: <cmp-270></cmp-270><cmp-271></cmp-271><cmp-272></cmp-272><cmp-273></cmp-273><cmp-274></cmp-274><cmp-275></cmp-275><cmp-276></cmp-276><cmp-277></cmp-277><cmp-278></cmp-278><cmp-279></cmp-279></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp270Component,Cmp271Component,Cmp272Component,Cmp273Component,Cmp274Component,Cmp275Component,Cmp276Component,Cmp277Component,Cmp278Component,Cmp279Component],
  exports: [Comp],
})
export class Module_airplane_team2_mod7 {}

        