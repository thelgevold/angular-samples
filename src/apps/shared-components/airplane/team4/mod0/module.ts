
import {Component, NgModule} from '@angular/core';
import {Cmp400Component} from './cmp0/cmp';
import {Cmp401Component} from './cmp1/cmp';
import {Cmp402Component} from './cmp2/cmp';
import {Cmp403Component} from './cmp3/cmp';
import {Cmp404Component} from './cmp4/cmp';
import {Cmp405Component} from './cmp5/cmp';
import {Cmp406Component} from './cmp6/cmp';
import {Cmp407Component} from './cmp7/cmp';
import {Cmp408Component} from './cmp8/cmp';
import {Cmp409Component} from './cmp9/cmp';
@Component({
  selector: 'team4-mod0',
  template: '<div>team4: <cmp-400></cmp-400><cmp-401></cmp-401><cmp-402></cmp-402><cmp-403></cmp-403><cmp-404></cmp-404><cmp-405></cmp-405><cmp-406></cmp-406><cmp-407></cmp-407><cmp-408></cmp-408><cmp-409></cmp-409></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp400Component,Cmp401Component,Cmp402Component,Cmp403Component,Cmp404Component,Cmp405Component,Cmp406Component,Cmp407Component,Cmp408Component,Cmp409Component],
  exports: [Comp],
})
export class Module_airplane_team4_mod0 {}

        