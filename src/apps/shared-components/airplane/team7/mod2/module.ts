
import {Component, NgModule} from '@angular/core';
import {Cmp720Component} from './cmp0/cmp';
import {Cmp721Component} from './cmp1/cmp';
import {Cmp722Component} from './cmp2/cmp';
import {Cmp723Component} from './cmp3/cmp';
import {Cmp724Component} from './cmp4/cmp';
import {Cmp725Component} from './cmp5/cmp';
import {Cmp726Component} from './cmp6/cmp';
import {Cmp727Component} from './cmp7/cmp';
import {Cmp728Component} from './cmp8/cmp';
import {Cmp729Component} from './cmp9/cmp';
@Component({
  selector: 'team7-mod2',
  template: '<div>team7: <cmp-720></cmp-720><cmp-721></cmp-721><cmp-722></cmp-722><cmp-723></cmp-723><cmp-724></cmp-724><cmp-725></cmp-725><cmp-726></cmp-726><cmp-727></cmp-727><cmp-728></cmp-728><cmp-729></cmp-729></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp720Component,Cmp721Component,Cmp722Component,Cmp723Component,Cmp724Component,Cmp725Component,Cmp726Component,Cmp727Component,Cmp728Component,Cmp729Component],
  exports: [Comp],
})
export class Module_airplane_team7_mod2 {}

        