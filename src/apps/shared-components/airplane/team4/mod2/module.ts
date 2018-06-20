
import {Component, NgModule} from '@angular/core';
import {Cmp420Component} from './cmp0/cmp';
import {Cmp421Component} from './cmp1/cmp';
import {Cmp422Component} from './cmp2/cmp';
import {Cmp423Component} from './cmp3/cmp';
import {Cmp424Component} from './cmp4/cmp';
import {Cmp425Component} from './cmp5/cmp';
import {Cmp426Component} from './cmp6/cmp';
import {Cmp427Component} from './cmp7/cmp';
import {Cmp428Component} from './cmp8/cmp';
import {Cmp429Component} from './cmp9/cmp';
@Component({
  selector: 'team4-mod2',
  template: '<div>team4: <cmp-420></cmp-420><cmp-421></cmp-421><cmp-422></cmp-422><cmp-423></cmp-423><cmp-424></cmp-424><cmp-425></cmp-425><cmp-426></cmp-426><cmp-427></cmp-427><cmp-428></cmp-428><cmp-429></cmp-429></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp420Component,Cmp421Component,Cmp422Component,Cmp423Component,Cmp424Component,Cmp425Component,Cmp426Component,Cmp427Component,Cmp428Component,Cmp429Component],
  exports: [Comp],
})
export class Module_airplane_team4_mod2 {}

        