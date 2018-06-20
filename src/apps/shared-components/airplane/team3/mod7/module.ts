
import {Component, NgModule} from '@angular/core';
import {Cmp370Component} from './cmp0/cmp';
import {Cmp371Component} from './cmp1/cmp';
import {Cmp372Component} from './cmp2/cmp';
import {Cmp373Component} from './cmp3/cmp';
import {Cmp374Component} from './cmp4/cmp';
import {Cmp375Component} from './cmp5/cmp';
import {Cmp376Component} from './cmp6/cmp';
import {Cmp377Component} from './cmp7/cmp';
import {Cmp378Component} from './cmp8/cmp';
import {Cmp379Component} from './cmp9/cmp';
@Component({
  selector: 'team3-mod7',
  template: '<div>team3: <cmp-370></cmp-370><cmp-371></cmp-371><cmp-372></cmp-372><cmp-373></cmp-373><cmp-374></cmp-374><cmp-375></cmp-375><cmp-376></cmp-376><cmp-377></cmp-377><cmp-378></cmp-378><cmp-379></cmp-379></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp370Component,Cmp371Component,Cmp372Component,Cmp373Component,Cmp374Component,Cmp375Component,Cmp376Component,Cmp377Component,Cmp378Component,Cmp379Component],
  exports: [Comp],
})
export class Module_airplane_team3_mod7 {}

        