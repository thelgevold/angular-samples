
import {Component, NgModule} from '@angular/core';
import {Cmp120Component} from './cmp0/cmp';
import {Cmp121Component} from './cmp1/cmp';
import {Cmp122Component} from './cmp2/cmp';
import {Cmp123Component} from './cmp3/cmp';
import {Cmp124Component} from './cmp4/cmp';
import {Cmp125Component} from './cmp5/cmp';
import {Cmp126Component} from './cmp6/cmp';
import {Cmp127Component} from './cmp7/cmp';
import {Cmp128Component} from './cmp8/cmp';
import {Cmp129Component} from './cmp9/cmp';
@Component({
  selector: 'team1-mod2',
  template: '<div>team1: <cmp-120></cmp-120><cmp-121></cmp-121><cmp-122></cmp-122><cmp-123></cmp-123><cmp-124></cmp-124><cmp-125></cmp-125><cmp-126></cmp-126><cmp-127></cmp-127><cmp-128></cmp-128><cmp-129></cmp-129></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp120Component,Cmp121Component,Cmp122Component,Cmp123Component,Cmp124Component,Cmp125Component,Cmp126Component,Cmp127Component,Cmp128Component,Cmp129Component],
  exports: [Comp],
})
export class Module_airplane_team1_mod2 {}

        