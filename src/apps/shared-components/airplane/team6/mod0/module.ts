
import {Component, NgModule} from '@angular/core';
import {Cmp600Component} from './cmp0/cmp';
import {Cmp601Component} from './cmp1/cmp';
import {Cmp602Component} from './cmp2/cmp';
import {Cmp603Component} from './cmp3/cmp';
import {Cmp604Component} from './cmp4/cmp';
import {Cmp605Component} from './cmp5/cmp';
import {Cmp606Component} from './cmp6/cmp';
import {Cmp607Component} from './cmp7/cmp';
import {Cmp608Component} from './cmp8/cmp';
import {Cmp609Component} from './cmp9/cmp';
@Component({
  selector: 'team6-mod0',
  template: '<div>team6: <cmp-600></cmp-600><cmp-601></cmp-601><cmp-602></cmp-602><cmp-603></cmp-603><cmp-604></cmp-604><cmp-605></cmp-605><cmp-606></cmp-606><cmp-607></cmp-607><cmp-608></cmp-608><cmp-609></cmp-609></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp600Component,Cmp601Component,Cmp602Component,Cmp603Component,Cmp604Component,Cmp605Component,Cmp606Component,Cmp607Component,Cmp608Component,Cmp609Component],
  exports: [Comp],
})
export class Module_airplane_team6_mod0 {}

        