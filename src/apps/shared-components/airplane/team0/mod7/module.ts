
import {Component, NgModule} from '@angular/core';
import {Cmp70Component} from './cmp0/cmp';
import {Cmp71Component} from './cmp1/cmp';
import {Cmp72Component} from './cmp2/cmp';
import {Cmp73Component} from './cmp3/cmp';
import {Cmp74Component} from './cmp4/cmp';
import {Cmp75Component} from './cmp5/cmp';
import {Cmp76Component} from './cmp6/cmp';
import {Cmp77Component} from './cmp7/cmp';
import {Cmp78Component} from './cmp8/cmp';
import {Cmp79Component} from './cmp9/cmp';
@Component({
  selector: 'team0-mod7',
  template: '<div>team0: <cmp-70></cmp-70><cmp-71></cmp-71><cmp-72></cmp-72><cmp-73></cmp-73><cmp-74></cmp-74><cmp-75></cmp-75><cmp-76></cmp-76><cmp-77></cmp-77><cmp-78></cmp-78><cmp-79></cmp-79></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp70Component,Cmp71Component,Cmp72Component,Cmp73Component,Cmp74Component,Cmp75Component,Cmp76Component,Cmp77Component,Cmp78Component,Cmp79Component],
  exports: [Comp],
})
export class Module_airplane_team0_mod7 {}

        