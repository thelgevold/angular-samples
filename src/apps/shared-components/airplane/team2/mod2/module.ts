
import {Component, NgModule} from '@angular/core';
import {Cmp220Component} from './cmp0/cmp';
import {Cmp221Component} from './cmp1/cmp';
import {Cmp222Component} from './cmp2/cmp';
import {Cmp223Component} from './cmp3/cmp';
import {Cmp224Component} from './cmp4/cmp';
import {Cmp225Component} from './cmp5/cmp';
import {Cmp226Component} from './cmp6/cmp';
import {Cmp227Component} from './cmp7/cmp';
import {Cmp228Component} from './cmp8/cmp';
import {Cmp229Component} from './cmp9/cmp';
@Component({
  selector: 'team2-mod2',
  template: '<div>team2: <cmp-220></cmp-220><cmp-221></cmp-221><cmp-222></cmp-222><cmp-223></cmp-223><cmp-224></cmp-224><cmp-225></cmp-225><cmp-226></cmp-226><cmp-227></cmp-227><cmp-228></cmp-228><cmp-229></cmp-229></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp220Component,Cmp221Component,Cmp222Component,Cmp223Component,Cmp224Component,Cmp225Component,Cmp226Component,Cmp227Component,Cmp228Component,Cmp229Component],
  exports: [Comp],
})
export class Module_airplane_team2_mod2 {}

        