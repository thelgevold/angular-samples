
import {Component, NgModule} from '@angular/core';
import {Cmp490Component} from './cmp0/cmp';
import {Cmp491Component} from './cmp1/cmp';
import {Cmp492Component} from './cmp2/cmp';
import {Cmp493Component} from './cmp3/cmp';
import {Cmp494Component} from './cmp4/cmp';
import {Cmp495Component} from './cmp5/cmp';
import {Cmp496Component} from './cmp6/cmp';
import {Cmp497Component} from './cmp7/cmp';
import {Cmp498Component} from './cmp8/cmp';
import {Cmp499Component} from './cmp9/cmp';
@Component({
  selector: 'team4-mod9',
  template: '<div>team4: <cmp-490></cmp-490><cmp-491></cmp-491><cmp-492></cmp-492><cmp-493></cmp-493><cmp-494></cmp-494><cmp-495></cmp-495><cmp-496></cmp-496><cmp-497></cmp-497><cmp-498></cmp-498><cmp-499></cmp-499></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp490Component,Cmp491Component,Cmp492Component,Cmp493Component,Cmp494Component,Cmp495Component,Cmp496Component,Cmp497Component,Cmp498Component,Cmp499Component],
  exports: [Comp],
})
export class Module_airplane_team4_mod9 {}

        