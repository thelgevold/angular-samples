
import {Component, NgModule} from '@angular/core';
import {Cmp110Component} from './cmp0/cmp';
import {Cmp111Component} from './cmp1/cmp';
import {Cmp112Component} from './cmp2/cmp';
import {Cmp113Component} from './cmp3/cmp';
import {Cmp114Component} from './cmp4/cmp';
import {Cmp115Component} from './cmp5/cmp';
import {Cmp116Component} from './cmp6/cmp';
import {Cmp117Component} from './cmp7/cmp';
import {Cmp118Component} from './cmp8/cmp';
import {Cmp119Component} from './cmp9/cmp';
@Component({
  selector: 'team1-mod1',
  template: '<div>team1: <cmp-110></cmp-110><cmp-111></cmp-111><cmp-112></cmp-112><cmp-113></cmp-113><cmp-114></cmp-114><cmp-115></cmp-115><cmp-116></cmp-116><cmp-117></cmp-117><cmp-118></cmp-118><cmp-119></cmp-119></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp110Component,Cmp111Component,Cmp112Component,Cmp113Component,Cmp114Component,Cmp115Component,Cmp116Component,Cmp117Component,Cmp118Component,Cmp119Component],
  exports: [Comp],
})
export class Module_airplane_team1_mod1 {}

        