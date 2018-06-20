
import {Component, NgModule} from '@angular/core';
import {Cmp430Component} from './cmp0/cmp';
import {Cmp431Component} from './cmp1/cmp';
import {Cmp432Component} from './cmp2/cmp';
import {Cmp433Component} from './cmp3/cmp';
import {Cmp434Component} from './cmp4/cmp';
import {Cmp435Component} from './cmp5/cmp';
import {Cmp436Component} from './cmp6/cmp';
import {Cmp437Component} from './cmp7/cmp';
import {Cmp438Component} from './cmp8/cmp';
import {Cmp439Component} from './cmp9/cmp';
@Component({
  selector: 'team4-mod3',
  template: '<div>team4: <cmp-430></cmp-430><cmp-431></cmp-431><cmp-432></cmp-432><cmp-433></cmp-433><cmp-434></cmp-434><cmp-435></cmp-435><cmp-436></cmp-436><cmp-437></cmp-437><cmp-438></cmp-438><cmp-439></cmp-439></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp430Component,Cmp431Component,Cmp432Component,Cmp433Component,Cmp434Component,Cmp435Component,Cmp436Component,Cmp437Component,Cmp438Component,Cmp439Component],
  exports: [Comp],
})
export class Module_airplane_team4_mod3 {}

        