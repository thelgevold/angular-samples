
import {Component, NgModule} from '@angular/core';
import {Cmp580Component} from './cmp0/cmp';
import {Cmp581Component} from './cmp1/cmp';
import {Cmp582Component} from './cmp2/cmp';
import {Cmp583Component} from './cmp3/cmp';
import {Cmp584Component} from './cmp4/cmp';
import {Cmp585Component} from './cmp5/cmp';
import {Cmp586Component} from './cmp6/cmp';
import {Cmp587Component} from './cmp7/cmp';
import {Cmp588Component} from './cmp8/cmp';
import {Cmp589Component} from './cmp9/cmp';
@Component({
  selector: 'team5-mod8',
  template: '<div>team5: <cmp-580></cmp-580><cmp-581></cmp-581><cmp-582></cmp-582><cmp-583></cmp-583><cmp-584></cmp-584><cmp-585></cmp-585><cmp-586></cmp-586><cmp-587></cmp-587><cmp-588></cmp-588><cmp-589></cmp-589></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp580Component,Cmp581Component,Cmp582Component,Cmp583Component,Cmp584Component,Cmp585Component,Cmp586Component,Cmp587Component,Cmp588Component,Cmp589Component],
  exports: [Comp],
})
export class Module_airplane_team5_mod8 {}

        