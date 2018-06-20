
import {Component, NgModule} from '@angular/core';
import {Cmp710Component} from './cmp0/cmp';
import {Cmp711Component} from './cmp1/cmp';
import {Cmp712Component} from './cmp2/cmp';
import {Cmp713Component} from './cmp3/cmp';
import {Cmp714Component} from './cmp4/cmp';
import {Cmp715Component} from './cmp5/cmp';
import {Cmp716Component} from './cmp6/cmp';
import {Cmp717Component} from './cmp7/cmp';
import {Cmp718Component} from './cmp8/cmp';
import {Cmp719Component} from './cmp9/cmp';
@Component({
  selector: 'team7-mod1',
  template: '<div>team7: <cmp-710></cmp-710><cmp-711></cmp-711><cmp-712></cmp-712><cmp-713></cmp-713><cmp-714></cmp-714><cmp-715></cmp-715><cmp-716></cmp-716><cmp-717></cmp-717><cmp-718></cmp-718><cmp-719></cmp-719></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp710Component,Cmp711Component,Cmp712Component,Cmp713Component,Cmp714Component,Cmp715Component,Cmp716Component,Cmp717Component,Cmp718Component,Cmp719Component],
  exports: [Comp],
})
export class Module_airplane_team7_mod1 {}

        