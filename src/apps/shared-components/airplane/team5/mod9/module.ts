
import {Component, NgModule} from '@angular/core';
import {Cmp590Component} from './cmp0/cmp';
import {Cmp591Component} from './cmp1/cmp';
import {Cmp592Component} from './cmp2/cmp';
import {Cmp593Component} from './cmp3/cmp';
import {Cmp594Component} from './cmp4/cmp';
import {Cmp595Component} from './cmp5/cmp';
import {Cmp596Component} from './cmp6/cmp';
import {Cmp597Component} from './cmp7/cmp';
import {Cmp598Component} from './cmp8/cmp';
import {Cmp599Component} from './cmp9/cmp';
@Component({
  selector: 'team5-mod9',
  template: '<div>team5: <cmp-590></cmp-590><cmp-591></cmp-591><cmp-592></cmp-592><cmp-593></cmp-593><cmp-594></cmp-594><cmp-595></cmp-595><cmp-596></cmp-596><cmp-597></cmp-597><cmp-598></cmp-598><cmp-599></cmp-599></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp590Component,Cmp591Component,Cmp592Component,Cmp593Component,Cmp594Component,Cmp595Component,Cmp596Component,Cmp597Component,Cmp598Component,Cmp599Component],
  exports: [Comp],
})
export class Module_airplane_team5_mod9 {}

        