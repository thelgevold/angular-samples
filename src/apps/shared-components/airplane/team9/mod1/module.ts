
import {Component, NgModule} from '@angular/core';
import {Cmp910Component} from './cmp0/cmp';
import {Cmp911Component} from './cmp1/cmp';
import {Cmp912Component} from './cmp2/cmp';
import {Cmp913Component} from './cmp3/cmp';
import {Cmp914Component} from './cmp4/cmp';
import {Cmp915Component} from './cmp5/cmp';
import {Cmp916Component} from './cmp6/cmp';
import {Cmp917Component} from './cmp7/cmp';
import {Cmp918Component} from './cmp8/cmp';
import {Cmp919Component} from './cmp9/cmp';
@Component({
  selector: 'team9-mod1',
  template: '<div>team9: <cmp-910></cmp-910><cmp-911></cmp-911><cmp-912></cmp-912><cmp-913></cmp-913><cmp-914></cmp-914><cmp-915></cmp-915><cmp-916></cmp-916><cmp-917></cmp-917><cmp-918></cmp-918><cmp-919></cmp-919></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp910Component,Cmp911Component,Cmp912Component,Cmp913Component,Cmp914Component,Cmp915Component,Cmp916Component,Cmp917Component,Cmp918Component,Cmp919Component],
  exports: [Comp],
})
export class Module_airplane_team9_mod1 {}

        