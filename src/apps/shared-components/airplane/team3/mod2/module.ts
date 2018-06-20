
import {Component, NgModule} from '@angular/core';
import {Cmp320Component} from './cmp0/cmp';
import {Cmp321Component} from './cmp1/cmp';
import {Cmp322Component} from './cmp2/cmp';
import {Cmp323Component} from './cmp3/cmp';
import {Cmp324Component} from './cmp4/cmp';
import {Cmp325Component} from './cmp5/cmp';
import {Cmp326Component} from './cmp6/cmp';
import {Cmp327Component} from './cmp7/cmp';
import {Cmp328Component} from './cmp8/cmp';
import {Cmp329Component} from './cmp9/cmp';
@Component({
  selector: 'team3-mod2',
  template: '<div>team3: <cmp-320></cmp-320><cmp-321></cmp-321><cmp-322></cmp-322><cmp-323></cmp-323><cmp-324></cmp-324><cmp-325></cmp-325><cmp-326></cmp-326><cmp-327></cmp-327><cmp-328></cmp-328><cmp-329></cmp-329></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp320Component,Cmp321Component,Cmp322Component,Cmp323Component,Cmp324Component,Cmp325Component,Cmp326Component,Cmp327Component,Cmp328Component,Cmp329Component],
  exports: [Comp],
})
export class Module_airplane_team3_mod2 {}

        