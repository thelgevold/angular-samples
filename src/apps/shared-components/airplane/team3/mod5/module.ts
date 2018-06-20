
import {Component, NgModule} from '@angular/core';
import {Cmp350Component} from './cmp0/cmp';
import {Cmp351Component} from './cmp1/cmp';
import {Cmp352Component} from './cmp2/cmp';
import {Cmp353Component} from './cmp3/cmp';
import {Cmp354Component} from './cmp4/cmp';
import {Cmp355Component} from './cmp5/cmp';
import {Cmp356Component} from './cmp6/cmp';
import {Cmp357Component} from './cmp7/cmp';
import {Cmp358Component} from './cmp8/cmp';
import {Cmp359Component} from './cmp9/cmp';
@Component({
  selector: 'team3-mod5',
  template: '<div>team3: <cmp-350></cmp-350><cmp-351></cmp-351><cmp-352></cmp-352><cmp-353></cmp-353><cmp-354></cmp-354><cmp-355></cmp-355><cmp-356></cmp-356><cmp-357></cmp-357><cmp-358></cmp-358><cmp-359></cmp-359></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp350Component,Cmp351Component,Cmp352Component,Cmp353Component,Cmp354Component,Cmp355Component,Cmp356Component,Cmp357Component,Cmp358Component,Cmp359Component],
  exports: [Comp],
})
export class Module_airplane_team3_mod5 {}

        