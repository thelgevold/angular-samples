
import {Component, NgModule} from '@angular/core';
import {Cmp360Component} from './cmp0/cmp';
import {Cmp361Component} from './cmp1/cmp';
import {Cmp362Component} from './cmp2/cmp';
import {Cmp363Component} from './cmp3/cmp';
import {Cmp364Component} from './cmp4/cmp';
import {Cmp365Component} from './cmp5/cmp';
import {Cmp366Component} from './cmp6/cmp';
import {Cmp367Component} from './cmp7/cmp';
import {Cmp368Component} from './cmp8/cmp';
import {Cmp369Component} from './cmp9/cmp';
@Component({
  selector: 'team3-mod6',
  template: '<div>team3: <cmp-360></cmp-360><cmp-361></cmp-361><cmp-362></cmp-362><cmp-363></cmp-363><cmp-364></cmp-364><cmp-365></cmp-365><cmp-366></cmp-366><cmp-367></cmp-367><cmp-368></cmp-368><cmp-369></cmp-369></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp360Component,Cmp361Component,Cmp362Component,Cmp363Component,Cmp364Component,Cmp365Component,Cmp366Component,Cmp367Component,Cmp368Component,Cmp369Component],
  exports: [Comp],
})
export class Module_airplane_team3_mod6 {}

        