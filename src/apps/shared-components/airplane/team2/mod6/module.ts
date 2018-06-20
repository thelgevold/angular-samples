
import {Component, NgModule} from '@angular/core';
import {Cmp260Component} from './cmp0/cmp';
import {Cmp261Component} from './cmp1/cmp';
import {Cmp262Component} from './cmp2/cmp';
import {Cmp263Component} from './cmp3/cmp';
import {Cmp264Component} from './cmp4/cmp';
import {Cmp265Component} from './cmp5/cmp';
import {Cmp266Component} from './cmp6/cmp';
import {Cmp267Component} from './cmp7/cmp';
import {Cmp268Component} from './cmp8/cmp';
import {Cmp269Component} from './cmp9/cmp';
@Component({
  selector: 'team2-mod6',
  template: '<div>team2: <cmp-260></cmp-260><cmp-261></cmp-261><cmp-262></cmp-262><cmp-263></cmp-263><cmp-264></cmp-264><cmp-265></cmp-265><cmp-266></cmp-266><cmp-267></cmp-267><cmp-268></cmp-268><cmp-269></cmp-269></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp260Component,Cmp261Component,Cmp262Component,Cmp263Component,Cmp264Component,Cmp265Component,Cmp266Component,Cmp267Component,Cmp268Component,Cmp269Component],
  exports: [Comp],
})
export class Module_airplane_team2_mod6 {}

        