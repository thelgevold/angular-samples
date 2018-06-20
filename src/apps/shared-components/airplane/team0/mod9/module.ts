
import {Component, NgModule} from '@angular/core';
import {Cmp90Component} from './cmp0/cmp';
import {Cmp91Component} from './cmp1/cmp';
import {Cmp92Component} from './cmp2/cmp';
import {Cmp93Component} from './cmp3/cmp';
import {Cmp94Component} from './cmp4/cmp';
import {Cmp95Component} from './cmp5/cmp';
import {Cmp96Component} from './cmp6/cmp';
import {Cmp97Component} from './cmp7/cmp';
import {Cmp98Component} from './cmp8/cmp';
import {Cmp99Component} from './cmp9/cmp';
@Component({
  selector: 'team0-mod9',
  template: '<div>team0: <cmp-90></cmp-90><cmp-91></cmp-91><cmp-92></cmp-92><cmp-93></cmp-93><cmp-94></cmp-94><cmp-95></cmp-95><cmp-96></cmp-96><cmp-97></cmp-97><cmp-98></cmp-98><cmp-99></cmp-99></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp90Component,Cmp91Component,Cmp92Component,Cmp93Component,Cmp94Component,Cmp95Component,Cmp96Component,Cmp97Component,Cmp98Component,Cmp99Component],
  exports: [Comp],
})
export class Module_airplane_team0_mod9 {}

        