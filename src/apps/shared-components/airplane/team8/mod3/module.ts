
import {Component, NgModule} from '@angular/core';
import {Cmp830Component} from './cmp0/cmp';
import {Cmp831Component} from './cmp1/cmp';
import {Cmp832Component} from './cmp2/cmp';
import {Cmp833Component} from './cmp3/cmp';
import {Cmp834Component} from './cmp4/cmp';
import {Cmp835Component} from './cmp5/cmp';
import {Cmp836Component} from './cmp6/cmp';
import {Cmp837Component} from './cmp7/cmp';
import {Cmp838Component} from './cmp8/cmp';
import {Cmp839Component} from './cmp9/cmp';
@Component({
  selector: 'team8-mod3',
  template: '<div>team8: <cmp-830></cmp-830><cmp-831></cmp-831><cmp-832></cmp-832><cmp-833></cmp-833><cmp-834></cmp-834><cmp-835></cmp-835><cmp-836></cmp-836><cmp-837></cmp-837><cmp-838></cmp-838><cmp-839></cmp-839></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp830Component,Cmp831Component,Cmp832Component,Cmp833Component,Cmp834Component,Cmp835Component,Cmp836Component,Cmp837Component,Cmp838Component,Cmp839Component],
  exports: [Comp],
})
export class Module_airplane_team8_mod3 {}

        