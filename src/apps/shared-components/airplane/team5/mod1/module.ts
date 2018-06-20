
import {Component, NgModule} from '@angular/core';
import {Cmp510Component} from './cmp0/cmp';
import {Cmp511Component} from './cmp1/cmp';
import {Cmp512Component} from './cmp2/cmp';
import {Cmp513Component} from './cmp3/cmp';
import {Cmp514Component} from './cmp4/cmp';
import {Cmp515Component} from './cmp5/cmp';
import {Cmp516Component} from './cmp6/cmp';
import {Cmp517Component} from './cmp7/cmp';
import {Cmp518Component} from './cmp8/cmp';
import {Cmp519Component} from './cmp9/cmp';
@Component({
  selector: 'team5-mod1',
  template: '<div>team5: <cmp-510></cmp-510><cmp-511></cmp-511><cmp-512></cmp-512><cmp-513></cmp-513><cmp-514></cmp-514><cmp-515></cmp-515><cmp-516></cmp-516><cmp-517></cmp-517><cmp-518></cmp-518><cmp-519></cmp-519></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp510Component,Cmp511Component,Cmp512Component,Cmp513Component,Cmp514Component,Cmp515Component,Cmp516Component,Cmp517Component,Cmp518Component,Cmp519Component],
  exports: [Comp],
})
export class Module_airplane_team5_mod1 {}

        