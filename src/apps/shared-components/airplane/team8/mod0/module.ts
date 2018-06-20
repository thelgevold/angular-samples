
import {Component, NgModule} from '@angular/core';
import {Cmp800Component} from './cmp0/cmp';
import {Cmp801Component} from './cmp1/cmp';
import {Cmp802Component} from './cmp2/cmp';
import {Cmp803Component} from './cmp3/cmp';
import {Cmp804Component} from './cmp4/cmp';
import {Cmp805Component} from './cmp5/cmp';
import {Cmp806Component} from './cmp6/cmp';
import {Cmp807Component} from './cmp7/cmp';
import {Cmp808Component} from './cmp8/cmp';
import {Cmp809Component} from './cmp9/cmp';
@Component({
  selector: 'team8-mod0',
  template: '<div>team8: <cmp-800></cmp-800><cmp-801></cmp-801><cmp-802></cmp-802><cmp-803></cmp-803><cmp-804></cmp-804><cmp-805></cmp-805><cmp-806></cmp-806><cmp-807></cmp-807><cmp-808></cmp-808><cmp-809></cmp-809></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp800Component,Cmp801Component,Cmp802Component,Cmp803Component,Cmp804Component,Cmp805Component,Cmp806Component,Cmp807Component,Cmp808Component,Cmp809Component],
  exports: [Comp],
})
export class Module_airplane_team8_mod0 {}

        