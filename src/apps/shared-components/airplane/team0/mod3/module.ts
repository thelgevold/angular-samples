
import {Component, NgModule} from '@angular/core';
import {Cmp30Component} from './cmp0/cmp';
import {Cmp31Component} from './cmp1/cmp';
import {Cmp32Component} from './cmp2/cmp';
import {Cmp33Component} from './cmp3/cmp';
import {Cmp34Component} from './cmp4/cmp';
import {Cmp35Component} from './cmp5/cmp';
import {Cmp36Component} from './cmp6/cmp';
import {Cmp37Component} from './cmp7/cmp';
import {Cmp38Component} from './cmp8/cmp';
import {Cmp39Component} from './cmp9/cmp';
@Component({
  selector: 'team0-mod3',
  template: '<div>team0: <cmp-30></cmp-30><cmp-31></cmp-31><cmp-32></cmp-32><cmp-33></cmp-33><cmp-34></cmp-34><cmp-35></cmp-35><cmp-36></cmp-36><cmp-37></cmp-37><cmp-38></cmp-38><cmp-39></cmp-39></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp30Component,Cmp31Component,Cmp32Component,Cmp33Component,Cmp34Component,Cmp35Component,Cmp36Component,Cmp37Component,Cmp38Component,Cmp39Component],
  exports: [Comp],
})
export class Module_airplane_team0_mod3 {}

        