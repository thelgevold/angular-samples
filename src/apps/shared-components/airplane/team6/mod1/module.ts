
import {Component, NgModule} from '@angular/core';
import {Cmp610Component} from './cmp0/cmp';
import {Cmp611Component} from './cmp1/cmp';
import {Cmp612Component} from './cmp2/cmp';
import {Cmp613Component} from './cmp3/cmp';
import {Cmp614Component} from './cmp4/cmp';
import {Cmp615Component} from './cmp5/cmp';
import {Cmp616Component} from './cmp6/cmp';
import {Cmp617Component} from './cmp7/cmp';
import {Cmp618Component} from './cmp8/cmp';
import {Cmp619Component} from './cmp9/cmp';
@Component({
  selector: 'team6-mod1',
  template: '<div>team6: <cmp-610></cmp-610><cmp-611></cmp-611><cmp-612></cmp-612><cmp-613></cmp-613><cmp-614></cmp-614><cmp-615></cmp-615><cmp-616></cmp-616><cmp-617></cmp-617><cmp-618></cmp-618><cmp-619></cmp-619></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp610Component,Cmp611Component,Cmp612Component,Cmp613Component,Cmp614Component,Cmp615Component,Cmp616Component,Cmp617Component,Cmp618Component,Cmp619Component],
  exports: [Comp],
})
export class Module_airplane_team6_mod1 {}

        