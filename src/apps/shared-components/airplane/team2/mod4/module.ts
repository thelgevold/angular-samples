
import {Component, NgModule} from '@angular/core';
import {Cmp240Component} from './cmp0/cmp';
import {Cmp241Component} from './cmp1/cmp';
import {Cmp242Component} from './cmp2/cmp';
import {Cmp243Component} from './cmp3/cmp';
import {Cmp244Component} from './cmp4/cmp';
import {Cmp245Component} from './cmp5/cmp';
import {Cmp246Component} from './cmp6/cmp';
import {Cmp247Component} from './cmp7/cmp';
import {Cmp248Component} from './cmp8/cmp';
import {Cmp249Component} from './cmp9/cmp';
@Component({
  selector: 'team2-mod4',
  template: '<div>team2: <cmp-240></cmp-240><cmp-241></cmp-241><cmp-242></cmp-242><cmp-243></cmp-243><cmp-244></cmp-244><cmp-245></cmp-245><cmp-246></cmp-246><cmp-247></cmp-247><cmp-248></cmp-248><cmp-249></cmp-249></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp240Component,Cmp241Component,Cmp242Component,Cmp243Component,Cmp244Component,Cmp245Component,Cmp246Component,Cmp247Component,Cmp248Component,Cmp249Component],
  exports: [Comp],
})
export class Module_airplane_team2_mod4 {}

        