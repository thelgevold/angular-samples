
import {Component, NgModule} from '@angular/core';
import {Cmp880Component} from './cmp0/cmp';
import {Cmp881Component} from './cmp1/cmp';
import {Cmp882Component} from './cmp2/cmp';
import {Cmp883Component} from './cmp3/cmp';
import {Cmp884Component} from './cmp4/cmp';
import {Cmp885Component} from './cmp5/cmp';
import {Cmp886Component} from './cmp6/cmp';
import {Cmp887Component} from './cmp7/cmp';
import {Cmp888Component} from './cmp8/cmp';
import {Cmp889Component} from './cmp9/cmp';
@Component({
  selector: 'team8-mod8',
  template: '<div>team8: <cmp-880></cmp-880><cmp-881></cmp-881><cmp-882></cmp-882><cmp-883></cmp-883><cmp-884></cmp-884><cmp-885></cmp-885><cmp-886></cmp-886><cmp-887></cmp-887><cmp-888></cmp-888><cmp-889></cmp-889></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp880Component,Cmp881Component,Cmp882Component,Cmp883Component,Cmp884Component,Cmp885Component,Cmp886Component,Cmp887Component,Cmp888Component,Cmp889Component],
  exports: [Comp],
})
export class Module_airplane_team8_mod8 {}

        