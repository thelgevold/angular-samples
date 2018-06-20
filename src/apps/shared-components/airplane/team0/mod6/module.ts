
import {Component, NgModule} from '@angular/core';
import {Cmp60Component} from './cmp0/cmp';
import {Cmp61Component} from './cmp1/cmp';
import {Cmp62Component} from './cmp2/cmp';
import {Cmp63Component} from './cmp3/cmp';
import {Cmp64Component} from './cmp4/cmp';
import {Cmp65Component} from './cmp5/cmp';
import {Cmp66Component} from './cmp6/cmp';
import {Cmp67Component} from './cmp7/cmp';
import {Cmp68Component} from './cmp8/cmp';
import {Cmp69Component} from './cmp9/cmp';
@Component({
  selector: 'team0-mod6',
  template: '<div>team0: <cmp-60></cmp-60><cmp-61></cmp-61><cmp-62></cmp-62><cmp-63></cmp-63><cmp-64></cmp-64><cmp-65></cmp-65><cmp-66></cmp-66><cmp-67></cmp-67><cmp-68></cmp-68><cmp-69></cmp-69></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp60Component,Cmp61Component,Cmp62Component,Cmp63Component,Cmp64Component,Cmp65Component,Cmp66Component,Cmp67Component,Cmp68Component,Cmp69Component],
  exports: [Comp],
})
export class Module_airplane_team0_mod6 {}

        