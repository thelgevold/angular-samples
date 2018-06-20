
import {Component, NgModule} from '@angular/core';
import {Cmp150Component} from './cmp0/cmp';
import {Cmp151Component} from './cmp1/cmp';
import {Cmp152Component} from './cmp2/cmp';
import {Cmp153Component} from './cmp3/cmp';
import {Cmp154Component} from './cmp4/cmp';
import {Cmp155Component} from './cmp5/cmp';
import {Cmp156Component} from './cmp6/cmp';
import {Cmp157Component} from './cmp7/cmp';
import {Cmp158Component} from './cmp8/cmp';
import {Cmp159Component} from './cmp9/cmp';
@Component({
  selector: 'team1-mod5',
  template: '<div>team1: <cmp-150></cmp-150><cmp-151></cmp-151><cmp-152></cmp-152><cmp-153></cmp-153><cmp-154></cmp-154><cmp-155></cmp-155><cmp-156></cmp-156><cmp-157></cmp-157><cmp-158></cmp-158><cmp-159></cmp-159></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp150Component,Cmp151Component,Cmp152Component,Cmp153Component,Cmp154Component,Cmp155Component,Cmp156Component,Cmp157Component,Cmp158Component,Cmp159Component],
  exports: [Comp],
})
export class Module_airplane_team1_mod5 {}

        