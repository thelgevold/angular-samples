
import {Component, NgModule} from '@angular/core';
import {Cmp950Component} from './cmp0/cmp';
import {Cmp951Component} from './cmp1/cmp';
import {Cmp952Component} from './cmp2/cmp';
import {Cmp953Component} from './cmp3/cmp';
import {Cmp954Component} from './cmp4/cmp';
import {Cmp955Component} from './cmp5/cmp';
import {Cmp956Component} from './cmp6/cmp';
import {Cmp957Component} from './cmp7/cmp';
import {Cmp958Component} from './cmp8/cmp';
import {Cmp959Component} from './cmp9/cmp';
@Component({
  selector: 'team9-mod5',
  template: '<div>team9: <cmp-950></cmp-950><cmp-951></cmp-951><cmp-952></cmp-952><cmp-953></cmp-953><cmp-954></cmp-954><cmp-955></cmp-955><cmp-956></cmp-956><cmp-957></cmp-957><cmp-958></cmp-958><cmp-959></cmp-959></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp950Component,Cmp951Component,Cmp952Component,Cmp953Component,Cmp954Component,Cmp955Component,Cmp956Component,Cmp957Component,Cmp958Component,Cmp959Component],
  exports: [Comp],
})
export class Module_airplane_team9_mod5 {}

        