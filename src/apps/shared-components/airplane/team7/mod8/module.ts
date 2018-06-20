
import {Component, NgModule} from '@angular/core';
import {Cmp780Component} from './cmp0/cmp';
import {Cmp781Component} from './cmp1/cmp';
import {Cmp782Component} from './cmp2/cmp';
import {Cmp783Component} from './cmp3/cmp';
import {Cmp784Component} from './cmp4/cmp';
import {Cmp785Component} from './cmp5/cmp';
import {Cmp786Component} from './cmp6/cmp';
import {Cmp787Component} from './cmp7/cmp';
import {Cmp788Component} from './cmp8/cmp';
import {Cmp789Component} from './cmp9/cmp';
@Component({
  selector: 'team7-mod8',
  template: '<div>team7: <cmp-780></cmp-780><cmp-781></cmp-781><cmp-782></cmp-782><cmp-783></cmp-783><cmp-784></cmp-784><cmp-785></cmp-785><cmp-786></cmp-786><cmp-787></cmp-787><cmp-788></cmp-788><cmp-789></cmp-789></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp780Component,Cmp781Component,Cmp782Component,Cmp783Component,Cmp784Component,Cmp785Component,Cmp786Component,Cmp787Component,Cmp788Component,Cmp789Component],
  exports: [Comp],
})
export class Module_airplane_team7_mod8 {}

        