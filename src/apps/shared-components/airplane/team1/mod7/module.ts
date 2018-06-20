
import {Component, NgModule} from '@angular/core';
import {Cmp170Component} from './cmp0/cmp';
import {Cmp171Component} from './cmp1/cmp';
import {Cmp172Component} from './cmp2/cmp';
import {Cmp173Component} from './cmp3/cmp';
import {Cmp174Component} from './cmp4/cmp';
import {Cmp175Component} from './cmp5/cmp';
import {Cmp176Component} from './cmp6/cmp';
import {Cmp177Component} from './cmp7/cmp';
import {Cmp178Component} from './cmp8/cmp';
import {Cmp179Component} from './cmp9/cmp';
@Component({
  selector: 'team1-mod7',
  template: '<div>team1: <cmp-170></cmp-170><cmp-171></cmp-171><cmp-172></cmp-172><cmp-173></cmp-173><cmp-174></cmp-174><cmp-175></cmp-175><cmp-176></cmp-176><cmp-177></cmp-177><cmp-178></cmp-178><cmp-179></cmp-179></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp170Component,Cmp171Component,Cmp172Component,Cmp173Component,Cmp174Component,Cmp175Component,Cmp176Component,Cmp177Component,Cmp178Component,Cmp179Component],
  exports: [Comp],
})
export class Module_airplane_team1_mod7 {}

        