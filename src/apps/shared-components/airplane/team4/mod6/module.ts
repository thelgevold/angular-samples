
import {Component, NgModule} from '@angular/core';
import {Cmp460Component} from './cmp0/cmp';
import {Cmp461Component} from './cmp1/cmp';
import {Cmp462Component} from './cmp2/cmp';
import {Cmp463Component} from './cmp3/cmp';
import {Cmp464Component} from './cmp4/cmp';
import {Cmp465Component} from './cmp5/cmp';
import {Cmp466Component} from './cmp6/cmp';
import {Cmp467Component} from './cmp7/cmp';
import {Cmp468Component} from './cmp8/cmp';
import {Cmp469Component} from './cmp9/cmp';
@Component({
  selector: 'team4-mod6',
  template: '<div>team4: <cmp-460></cmp-460><cmp-461></cmp-461><cmp-462></cmp-462><cmp-463></cmp-463><cmp-464></cmp-464><cmp-465></cmp-465><cmp-466></cmp-466><cmp-467></cmp-467><cmp-468></cmp-468><cmp-469></cmp-469></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp460Component,Cmp461Component,Cmp462Component,Cmp463Component,Cmp464Component,Cmp465Component,Cmp466Component,Cmp467Component,Cmp468Component,Cmp469Component],
  exports: [Comp],
})
export class Module_airplane_team4_mod6 {}

        