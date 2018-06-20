
import {Component, NgModule} from '@angular/core';
import {Cmp970Component} from './cmp0/cmp';
import {Cmp971Component} from './cmp1/cmp';
import {Cmp972Component} from './cmp2/cmp';
import {Cmp973Component} from './cmp3/cmp';
import {Cmp974Component} from './cmp4/cmp';
import {Cmp975Component} from './cmp5/cmp';
import {Cmp976Component} from './cmp6/cmp';
import {Cmp977Component} from './cmp7/cmp';
import {Cmp978Component} from './cmp8/cmp';
import {Cmp979Component} from './cmp9/cmp';
@Component({
  selector: 'team9-mod7',
  template: '<div>team9: <cmp-970></cmp-970><cmp-971></cmp-971><cmp-972></cmp-972><cmp-973></cmp-973><cmp-974></cmp-974><cmp-975></cmp-975><cmp-976></cmp-976><cmp-977></cmp-977><cmp-978></cmp-978><cmp-979></cmp-979></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp970Component,Cmp971Component,Cmp972Component,Cmp973Component,Cmp974Component,Cmp975Component,Cmp976Component,Cmp977Component,Cmp978Component,Cmp979Component],
  exports: [Comp],
})
export class Module_airplane_team9_mod7 {}

        