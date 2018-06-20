
import {Component, NgModule} from '@angular/core';
import {Cmp290Component} from './cmp0/cmp';
import {Cmp291Component} from './cmp1/cmp';
import {Cmp292Component} from './cmp2/cmp';
import {Cmp293Component} from './cmp3/cmp';
import {Cmp294Component} from './cmp4/cmp';
import {Cmp295Component} from './cmp5/cmp';
import {Cmp296Component} from './cmp6/cmp';
import {Cmp297Component} from './cmp7/cmp';
import {Cmp298Component} from './cmp8/cmp';
import {Cmp299Component} from './cmp9/cmp';
@Component({
  selector: 'team2-mod9',
  template: '<div>team2: <cmp-290></cmp-290><cmp-291></cmp-291><cmp-292></cmp-292><cmp-293></cmp-293><cmp-294></cmp-294><cmp-295></cmp-295><cmp-296></cmp-296><cmp-297></cmp-297><cmp-298></cmp-298><cmp-299></cmp-299></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp290Component,Cmp291Component,Cmp292Component,Cmp293Component,Cmp294Component,Cmp295Component,Cmp296Component,Cmp297Component,Cmp298Component,Cmp299Component],
  exports: [Comp],
})
export class Module_airplane_team2_mod9 {}

        