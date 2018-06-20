
import {Component, NgModule} from '@angular/core';
import {Cmp650Component} from './cmp0/cmp';
import {Cmp651Component} from './cmp1/cmp';
import {Cmp652Component} from './cmp2/cmp';
import {Cmp653Component} from './cmp3/cmp';
import {Cmp654Component} from './cmp4/cmp';
import {Cmp655Component} from './cmp5/cmp';
import {Cmp656Component} from './cmp6/cmp';
import {Cmp657Component} from './cmp7/cmp';
import {Cmp658Component} from './cmp8/cmp';
import {Cmp659Component} from './cmp9/cmp';
@Component({
  selector: 'team6-mod5',
  template: '<div>team6: <cmp-650></cmp-650><cmp-651></cmp-651><cmp-652></cmp-652><cmp-653></cmp-653><cmp-654></cmp-654><cmp-655></cmp-655><cmp-656></cmp-656><cmp-657></cmp-657><cmp-658></cmp-658><cmp-659></cmp-659></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp650Component,Cmp651Component,Cmp652Component,Cmp653Component,Cmp654Component,Cmp655Component,Cmp656Component,Cmp657Component,Cmp658Component,Cmp659Component],
  exports: [Comp],
})
export class Module_airplane_team6_mod5 {}

        