
import {Component, NgModule} from '@angular/core';
import {Cmp230Component} from './cmp0/cmp';
import {Cmp231Component} from './cmp1/cmp';
import {Cmp232Component} from './cmp2/cmp';
import {Cmp233Component} from './cmp3/cmp';
import {Cmp234Component} from './cmp4/cmp';
import {Cmp235Component} from './cmp5/cmp';
import {Cmp236Component} from './cmp6/cmp';
import {Cmp237Component} from './cmp7/cmp';
import {Cmp238Component} from './cmp8/cmp';
import {Cmp239Component} from './cmp9/cmp';
@Component({
  selector: 'team2-mod3',
  template: '<div>team2: <cmp-230></cmp-230><cmp-231></cmp-231><cmp-232></cmp-232><cmp-233></cmp-233><cmp-234></cmp-234><cmp-235></cmp-235><cmp-236></cmp-236><cmp-237></cmp-237><cmp-238></cmp-238><cmp-239></cmp-239></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp230Component,Cmp231Component,Cmp232Component,Cmp233Component,Cmp234Component,Cmp235Component,Cmp236Component,Cmp237Component,Cmp238Component,Cmp239Component],
  exports: [Comp],
})
export class Module_airplane_team2_mod3 {}

        