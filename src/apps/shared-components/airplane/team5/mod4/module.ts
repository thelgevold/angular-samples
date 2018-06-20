
import {Component, NgModule} from '@angular/core';
import {Cmp540Component} from './cmp0/cmp';
import {Cmp541Component} from './cmp1/cmp';
import {Cmp542Component} from './cmp2/cmp';
import {Cmp543Component} from './cmp3/cmp';
import {Cmp544Component} from './cmp4/cmp';
import {Cmp545Component} from './cmp5/cmp';
import {Cmp546Component} from './cmp6/cmp';
import {Cmp547Component} from './cmp7/cmp';
import {Cmp548Component} from './cmp8/cmp';
import {Cmp549Component} from './cmp9/cmp';
@Component({
  selector: 'team5-mod4',
  template: '<div>team5: <cmp-540></cmp-540><cmp-541></cmp-541><cmp-542></cmp-542><cmp-543></cmp-543><cmp-544></cmp-544><cmp-545></cmp-545><cmp-546></cmp-546><cmp-547></cmp-547><cmp-548></cmp-548><cmp-549></cmp-549></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp540Component,Cmp541Component,Cmp542Component,Cmp543Component,Cmp544Component,Cmp545Component,Cmp546Component,Cmp547Component,Cmp548Component,Cmp549Component],
  exports: [Comp],
})
export class Module_airplane_team5_mod4 {}

        