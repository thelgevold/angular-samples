
import {Component, NgModule} from '@angular/core';
import {Cmp300Component} from './cmp0/cmp';
import {Cmp301Component} from './cmp1/cmp';
import {Cmp302Component} from './cmp2/cmp';
import {Cmp303Component} from './cmp3/cmp';
import {Cmp304Component} from './cmp4/cmp';
import {Cmp305Component} from './cmp5/cmp';
import {Cmp306Component} from './cmp6/cmp';
import {Cmp307Component} from './cmp7/cmp';
import {Cmp308Component} from './cmp8/cmp';
import {Cmp309Component} from './cmp9/cmp';
@Component({
  selector: 'team3-mod0',
  template: '<div>team3: <cmp-300></cmp-300><cmp-301></cmp-301><cmp-302></cmp-302><cmp-303></cmp-303><cmp-304></cmp-304><cmp-305></cmp-305><cmp-306></cmp-306><cmp-307></cmp-307><cmp-308></cmp-308><cmp-309></cmp-309></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp300Component,Cmp301Component,Cmp302Component,Cmp303Component,Cmp304Component,Cmp305Component,Cmp306Component,Cmp307Component,Cmp308Component,Cmp309Component],
  exports: [Comp],
})
export class Module_airplane_team3_mod0 {}

        