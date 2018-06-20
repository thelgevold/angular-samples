
import {Component, NgModule} from '@angular/core';
import {Cmp850Component} from './cmp0/cmp';
import {Cmp851Component} from './cmp1/cmp';
import {Cmp852Component} from './cmp2/cmp';
import {Cmp853Component} from './cmp3/cmp';
import {Cmp854Component} from './cmp4/cmp';
import {Cmp855Component} from './cmp5/cmp';
import {Cmp856Component} from './cmp6/cmp';
import {Cmp857Component} from './cmp7/cmp';
import {Cmp858Component} from './cmp8/cmp';
import {Cmp859Component} from './cmp9/cmp';
@Component({
  selector: 'team8-mod5',
  template: '<div>team8: <cmp-850></cmp-850><cmp-851></cmp-851><cmp-852></cmp-852><cmp-853></cmp-853><cmp-854></cmp-854><cmp-855></cmp-855><cmp-856></cmp-856><cmp-857></cmp-857><cmp-858></cmp-858><cmp-859></cmp-859></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp850Component,Cmp851Component,Cmp852Component,Cmp853Component,Cmp854Component,Cmp855Component,Cmp856Component,Cmp857Component,Cmp858Component,Cmp859Component],
  exports: [Comp],
})
export class Module_airplane_team8_mod5 {}

        