
import {Component, NgModule} from '@angular/core';
import {Cmp810Component} from './cmp0/cmp';
import {Cmp811Component} from './cmp1/cmp';
import {Cmp812Component} from './cmp2/cmp';
import {Cmp813Component} from './cmp3/cmp';
import {Cmp814Component} from './cmp4/cmp';
import {Cmp815Component} from './cmp5/cmp';
import {Cmp816Component} from './cmp6/cmp';
import {Cmp817Component} from './cmp7/cmp';
import {Cmp818Component} from './cmp8/cmp';
import {Cmp819Component} from './cmp9/cmp';
@Component({
  selector: 'team8-mod1',
  template: '<div>team8: <cmp-810></cmp-810><cmp-811></cmp-811><cmp-812></cmp-812><cmp-813></cmp-813><cmp-814></cmp-814><cmp-815></cmp-815><cmp-816></cmp-816><cmp-817></cmp-817><cmp-818></cmp-818><cmp-819></cmp-819></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp810Component,Cmp811Component,Cmp812Component,Cmp813Component,Cmp814Component,Cmp815Component,Cmp816Component,Cmp817Component,Cmp818Component,Cmp819Component],
  exports: [Comp],
})
export class Module_airplane_team8_mod1 {}

        