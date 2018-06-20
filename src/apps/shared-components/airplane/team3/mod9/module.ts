
import {Component, NgModule} from '@angular/core';
import {Cmp390Component} from './cmp0/cmp';
import {Cmp391Component} from './cmp1/cmp';
import {Cmp392Component} from './cmp2/cmp';
import {Cmp393Component} from './cmp3/cmp';
import {Cmp394Component} from './cmp4/cmp';
import {Cmp395Component} from './cmp5/cmp';
import {Cmp396Component} from './cmp6/cmp';
import {Cmp397Component} from './cmp7/cmp';
import {Cmp398Component} from './cmp8/cmp';
import {Cmp399Component} from './cmp9/cmp';
@Component({
  selector: 'team3-mod9',
  template: '<div>team3: <cmp-390></cmp-390><cmp-391></cmp-391><cmp-392></cmp-392><cmp-393></cmp-393><cmp-394></cmp-394><cmp-395></cmp-395><cmp-396></cmp-396><cmp-397></cmp-397><cmp-398></cmp-398><cmp-399></cmp-399></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp390Component,Cmp391Component,Cmp392Component,Cmp393Component,Cmp394Component,Cmp395Component,Cmp396Component,Cmp397Component,Cmp398Component,Cmp399Component],
  exports: [Comp],
})
export class Module_airplane_team3_mod9 {}

        