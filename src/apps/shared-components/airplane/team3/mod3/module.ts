
import {Component, NgModule} from '@angular/core';
import {Cmp330Component} from './cmp0/cmp';
import {Cmp331Component} from './cmp1/cmp';
import {Cmp332Component} from './cmp2/cmp';
import {Cmp333Component} from './cmp3/cmp';
import {Cmp334Component} from './cmp4/cmp';
import {Cmp335Component} from './cmp5/cmp';
import {Cmp336Component} from './cmp6/cmp';
import {Cmp337Component} from './cmp7/cmp';
import {Cmp338Component} from './cmp8/cmp';
import {Cmp339Component} from './cmp9/cmp';
@Component({
  selector: 'team3-mod3',
  template: '<div>team3: <cmp-330></cmp-330><cmp-331></cmp-331><cmp-332></cmp-332><cmp-333></cmp-333><cmp-334></cmp-334><cmp-335></cmp-335><cmp-336></cmp-336><cmp-337></cmp-337><cmp-338></cmp-338><cmp-339></cmp-339></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp330Component,Cmp331Component,Cmp332Component,Cmp333Component,Cmp334Component,Cmp335Component,Cmp336Component,Cmp337Component,Cmp338Component,Cmp339Component],
  exports: [Comp],
})
export class Module_airplane_team3_mod3 {}

        