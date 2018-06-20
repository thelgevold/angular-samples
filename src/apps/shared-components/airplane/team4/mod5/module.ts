
import {Component, NgModule} from '@angular/core';
import {Cmp450Component} from './cmp0/cmp';
import {Cmp451Component} from './cmp1/cmp';
import {Cmp452Component} from './cmp2/cmp';
import {Cmp453Component} from './cmp3/cmp';
import {Cmp454Component} from './cmp4/cmp';
import {Cmp455Component} from './cmp5/cmp';
import {Cmp456Component} from './cmp6/cmp';
import {Cmp457Component} from './cmp7/cmp';
import {Cmp458Component} from './cmp8/cmp';
import {Cmp459Component} from './cmp9/cmp';
@Component({
  selector: 'team4-mod5',
  template: '<div>team4: <cmp-450></cmp-450><cmp-451></cmp-451><cmp-452></cmp-452><cmp-453></cmp-453><cmp-454></cmp-454><cmp-455></cmp-455><cmp-456></cmp-456><cmp-457></cmp-457><cmp-458></cmp-458><cmp-459></cmp-459></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp450Component,Cmp451Component,Cmp452Component,Cmp453Component,Cmp454Component,Cmp455Component,Cmp456Component,Cmp457Component,Cmp458Component,Cmp459Component],
  exports: [Comp],
})
export class Module_airplane_team4_mod5 {}

        