
import {Component, NgModule} from '@angular/core';
import {Cmp410Component} from './cmp0/cmp';
import {Cmp411Component} from './cmp1/cmp';
import {Cmp412Component} from './cmp2/cmp';
import {Cmp413Component} from './cmp3/cmp';
import {Cmp414Component} from './cmp4/cmp';
import {Cmp415Component} from './cmp5/cmp';
import {Cmp416Component} from './cmp6/cmp';
import {Cmp417Component} from './cmp7/cmp';
import {Cmp418Component} from './cmp8/cmp';
import {Cmp419Component} from './cmp9/cmp';
@Component({
  selector: 'team4-mod1',
  template: '<div>team4: <cmp-410></cmp-410><cmp-411></cmp-411><cmp-412></cmp-412><cmp-413></cmp-413><cmp-414></cmp-414><cmp-415></cmp-415><cmp-416></cmp-416><cmp-417></cmp-417><cmp-418></cmp-418><cmp-419></cmp-419></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp410Component,Cmp411Component,Cmp412Component,Cmp413Component,Cmp414Component,Cmp415Component,Cmp416Component,Cmp417Component,Cmp418Component,Cmp419Component],
  exports: [Comp],
})
export class Module_airplane_team4_mod1 {}

        