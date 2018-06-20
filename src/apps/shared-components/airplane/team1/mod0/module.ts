
import {Component, NgModule} from '@angular/core';
import {Cmp100Component} from './cmp0/cmp';
import {Cmp101Component} from './cmp1/cmp';
import {Cmp102Component} from './cmp2/cmp';
import {Cmp103Component} from './cmp3/cmp';
import {Cmp104Component} from './cmp4/cmp';
import {Cmp105Component} from './cmp5/cmp';
import {Cmp106Component} from './cmp6/cmp';
import {Cmp107Component} from './cmp7/cmp';
import {Cmp108Component} from './cmp8/cmp';
import {Cmp109Component} from './cmp9/cmp';
@Component({
  selector: 'team1-mod0',
  template: '<div>team1: <cmp-100></cmp-100><cmp-101></cmp-101><cmp-102></cmp-102><cmp-103></cmp-103><cmp-104></cmp-104><cmp-105></cmp-105><cmp-106></cmp-106><cmp-107></cmp-107><cmp-108></cmp-108><cmp-109></cmp-109></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp100Component,Cmp101Component,Cmp102Component,Cmp103Component,Cmp104Component,Cmp105Component,Cmp106Component,Cmp107Component,Cmp108Component,Cmp109Component],
  exports: [Comp],
})
export class Module_airplane_team1_mod0 {}

        