
import {Component, NgModule} from '@angular/core';
import {Cmp550Component} from './cmp0/cmp';
import {Cmp551Component} from './cmp1/cmp';
import {Cmp552Component} from './cmp2/cmp';
import {Cmp553Component} from './cmp3/cmp';
import {Cmp554Component} from './cmp4/cmp';
import {Cmp555Component} from './cmp5/cmp';
import {Cmp556Component} from './cmp6/cmp';
import {Cmp557Component} from './cmp7/cmp';
import {Cmp558Component} from './cmp8/cmp';
import {Cmp559Component} from './cmp9/cmp';
@Component({
  selector: 'team5-mod5',
  template: '<div>team5: <cmp-550></cmp-550><cmp-551></cmp-551><cmp-552></cmp-552><cmp-553></cmp-553><cmp-554></cmp-554><cmp-555></cmp-555><cmp-556></cmp-556><cmp-557></cmp-557><cmp-558></cmp-558><cmp-559></cmp-559></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp550Component,Cmp551Component,Cmp552Component,Cmp553Component,Cmp554Component,Cmp555Component,Cmp556Component,Cmp557Component,Cmp558Component,Cmp559Component],
  exports: [Comp],
})
export class Module_airplane_team5_mod5 {}

        