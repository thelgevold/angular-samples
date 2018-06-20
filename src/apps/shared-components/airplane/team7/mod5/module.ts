
import {Component, NgModule} from '@angular/core';
import {Cmp750Component} from './cmp0/cmp';
import {Cmp751Component} from './cmp1/cmp';
import {Cmp752Component} from './cmp2/cmp';
import {Cmp753Component} from './cmp3/cmp';
import {Cmp754Component} from './cmp4/cmp';
import {Cmp755Component} from './cmp5/cmp';
import {Cmp756Component} from './cmp6/cmp';
import {Cmp757Component} from './cmp7/cmp';
import {Cmp758Component} from './cmp8/cmp';
import {Cmp759Component} from './cmp9/cmp';
@Component({
  selector: 'team7-mod5',
  template: '<div>team7: <cmp-750></cmp-750><cmp-751></cmp-751><cmp-752></cmp-752><cmp-753></cmp-753><cmp-754></cmp-754><cmp-755></cmp-755><cmp-756></cmp-756><cmp-757></cmp-757><cmp-758></cmp-758><cmp-759></cmp-759></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp750Component,Cmp751Component,Cmp752Component,Cmp753Component,Cmp754Component,Cmp755Component,Cmp756Component,Cmp757Component,Cmp758Component,Cmp759Component],
  exports: [Comp],
})
export class Module_airplane_team7_mod5 {}

        