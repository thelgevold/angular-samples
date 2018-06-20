
import {Component, NgModule} from '@angular/core';
import {Cmp500Component} from './cmp0/cmp';
import {Cmp501Component} from './cmp1/cmp';
import {Cmp502Component} from './cmp2/cmp';
import {Cmp503Component} from './cmp3/cmp';
import {Cmp504Component} from './cmp4/cmp';
import {Cmp505Component} from './cmp5/cmp';
import {Cmp506Component} from './cmp6/cmp';
import {Cmp507Component} from './cmp7/cmp';
import {Cmp508Component} from './cmp8/cmp';
import {Cmp509Component} from './cmp9/cmp';
@Component({
  selector: 'team5-mod0',
  template: '<div>team5: <cmp-500></cmp-500><cmp-501></cmp-501><cmp-502></cmp-502><cmp-503></cmp-503><cmp-504></cmp-504><cmp-505></cmp-505><cmp-506></cmp-506><cmp-507></cmp-507><cmp-508></cmp-508><cmp-509></cmp-509></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp500Component,Cmp501Component,Cmp502Component,Cmp503Component,Cmp504Component,Cmp505Component,Cmp506Component,Cmp507Component,Cmp508Component,Cmp509Component],
  exports: [Comp],
})
export class Module_airplane_team5_mod0 {}

        