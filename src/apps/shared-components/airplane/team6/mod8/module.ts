
import {Component, NgModule} from '@angular/core';
import {Cmp680Component} from './cmp0/cmp';
import {Cmp681Component} from './cmp1/cmp';
import {Cmp682Component} from './cmp2/cmp';
import {Cmp683Component} from './cmp3/cmp';
import {Cmp684Component} from './cmp4/cmp';
import {Cmp685Component} from './cmp5/cmp';
import {Cmp686Component} from './cmp6/cmp';
import {Cmp687Component} from './cmp7/cmp';
import {Cmp688Component} from './cmp8/cmp';
import {Cmp689Component} from './cmp9/cmp';
@Component({
  selector: 'team6-mod8',
  template: '<div>team6: <cmp-680></cmp-680><cmp-681></cmp-681><cmp-682></cmp-682><cmp-683></cmp-683><cmp-684></cmp-684><cmp-685></cmp-685><cmp-686></cmp-686><cmp-687></cmp-687><cmp-688></cmp-688><cmp-689></cmp-689></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp680Component,Cmp681Component,Cmp682Component,Cmp683Component,Cmp684Component,Cmp685Component,Cmp686Component,Cmp687Component,Cmp688Component,Cmp689Component],
  exports: [Comp],
})
export class Module_airplane_team6_mod8 {}

        