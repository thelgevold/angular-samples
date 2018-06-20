
import {Component, NgModule} from '@angular/core';
import {Cmp920Component} from './cmp0/cmp';
import {Cmp921Component} from './cmp1/cmp';
import {Cmp922Component} from './cmp2/cmp';
import {Cmp923Component} from './cmp3/cmp';
import {Cmp924Component} from './cmp4/cmp';
import {Cmp925Component} from './cmp5/cmp';
import {Cmp926Component} from './cmp6/cmp';
import {Cmp927Component} from './cmp7/cmp';
import {Cmp928Component} from './cmp8/cmp';
import {Cmp929Component} from './cmp9/cmp';
@Component({
  selector: 'team9-mod2',
  template: '<div>team9: <cmp-920></cmp-920><cmp-921></cmp-921><cmp-922></cmp-922><cmp-923></cmp-923><cmp-924></cmp-924><cmp-925></cmp-925><cmp-926></cmp-926><cmp-927></cmp-927><cmp-928></cmp-928><cmp-929></cmp-929></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp920Component,Cmp921Component,Cmp922Component,Cmp923Component,Cmp924Component,Cmp925Component,Cmp926Component,Cmp927Component,Cmp928Component,Cmp929Component],
  exports: [Comp],
})
export class Module_airplane_team9_mod2 {}

        