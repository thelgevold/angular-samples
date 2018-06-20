
import {Component, NgModule} from '@angular/core';
import {Cmp180Component} from './cmp0/cmp';
import {Cmp181Component} from './cmp1/cmp';
import {Cmp182Component} from './cmp2/cmp';
import {Cmp183Component} from './cmp3/cmp';
import {Cmp184Component} from './cmp4/cmp';
import {Cmp185Component} from './cmp5/cmp';
import {Cmp186Component} from './cmp6/cmp';
import {Cmp187Component} from './cmp7/cmp';
import {Cmp188Component} from './cmp8/cmp';
import {Cmp189Component} from './cmp9/cmp';
@Component({
  selector: 'team1-mod8',
  template: '<div>team1: <cmp-180></cmp-180><cmp-181></cmp-181><cmp-182></cmp-182><cmp-183></cmp-183><cmp-184></cmp-184><cmp-185></cmp-185><cmp-186></cmp-186><cmp-187></cmp-187><cmp-188></cmp-188><cmp-189></cmp-189></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp180Component,Cmp181Component,Cmp182Component,Cmp183Component,Cmp184Component,Cmp185Component,Cmp186Component,Cmp187Component,Cmp188Component,Cmp189Component],
  exports: [Comp],
})
export class Module_airplane_team1_mod8 {}

        