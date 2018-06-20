
import {Component, NgModule} from '@angular/core';
import {Cmp20Component} from './cmp0/cmp';
import {Cmp21Component} from './cmp1/cmp';
import {Cmp22Component} from './cmp2/cmp';
import {Cmp23Component} from './cmp3/cmp';
import {Cmp24Component} from './cmp4/cmp';
import {Cmp25Component} from './cmp5/cmp';
import {Cmp26Component} from './cmp6/cmp';
import {Cmp27Component} from './cmp7/cmp';
import {Cmp28Component} from './cmp8/cmp';
import {Cmp29Component} from './cmp9/cmp';
@Component({
  selector: 'team0-mod2',
  template: '<div>team0: <cmp-20></cmp-20><cmp-21></cmp-21><cmp-22></cmp-22><cmp-23></cmp-23><cmp-24></cmp-24><cmp-25></cmp-25><cmp-26></cmp-26><cmp-27></cmp-27><cmp-28></cmp-28><cmp-29></cmp-29></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp20Component,Cmp21Component,Cmp22Component,Cmp23Component,Cmp24Component,Cmp25Component,Cmp26Component,Cmp27Component,Cmp28Component,Cmp29Component],
  exports: [Comp],
})
export class Module_airplane_team0_mod2 {}

        