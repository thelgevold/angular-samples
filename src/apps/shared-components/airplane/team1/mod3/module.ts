
import {Component, NgModule} from '@angular/core';
import {Cmp130Component} from './cmp0/cmp';
import {Cmp131Component} from './cmp1/cmp';
import {Cmp132Component} from './cmp2/cmp';
import {Cmp133Component} from './cmp3/cmp';
import {Cmp134Component} from './cmp4/cmp';
import {Cmp135Component} from './cmp5/cmp';
import {Cmp136Component} from './cmp6/cmp';
import {Cmp137Component} from './cmp7/cmp';
import {Cmp138Component} from './cmp8/cmp';
import {Cmp139Component} from './cmp9/cmp';
@Component({
  selector: 'team1-mod3',
  template: '<div>team1: <cmp-130></cmp-130><cmp-131></cmp-131><cmp-132></cmp-132><cmp-133></cmp-133><cmp-134></cmp-134><cmp-135></cmp-135><cmp-136></cmp-136><cmp-137></cmp-137><cmp-138></cmp-138><cmp-139></cmp-139></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp130Component,Cmp131Component,Cmp132Component,Cmp133Component,Cmp134Component,Cmp135Component,Cmp136Component,Cmp137Component,Cmp138Component,Cmp139Component],
  exports: [Comp],
})
export class Module_airplane_team1_mod3 {}

        