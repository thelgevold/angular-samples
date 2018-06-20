
import {Component, NgModule} from '@angular/core';
import {Cmp990Component} from './cmp0/cmp';
import {Cmp991Component} from './cmp1/cmp';
import {Cmp992Component} from './cmp2/cmp';
import {Cmp993Component} from './cmp3/cmp';
import {Cmp994Component} from './cmp4/cmp';
import {Cmp995Component} from './cmp5/cmp';
import {Cmp996Component} from './cmp6/cmp';
import {Cmp997Component} from './cmp7/cmp';
import {Cmp998Component} from './cmp8/cmp';
import {Cmp999Component} from './cmp9/cmp';
@Component({
  selector: 'team9-mod9',
  template: '<div>team9: <cmp-990></cmp-990><cmp-991></cmp-991><cmp-992></cmp-992><cmp-993></cmp-993><cmp-994></cmp-994><cmp-995></cmp-995><cmp-996></cmp-996><cmp-997></cmp-997><cmp-998></cmp-998><cmp-999></cmp-999></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp990Component,Cmp991Component,Cmp992Component,Cmp993Component,Cmp994Component,Cmp995Component,Cmp996Component,Cmp997Component,Cmp998Component,Cmp999Component],
  exports: [Comp],
})
export class Module_airplane_team9_mod9 {}

        