
import {Component, NgModule} from '@angular/core';
import {Cmp860Component} from './cmp0/cmp';
import {Cmp861Component} from './cmp1/cmp';
import {Cmp862Component} from './cmp2/cmp';
import {Cmp863Component} from './cmp3/cmp';
import {Cmp864Component} from './cmp4/cmp';
import {Cmp865Component} from './cmp5/cmp';
import {Cmp866Component} from './cmp6/cmp';
import {Cmp867Component} from './cmp7/cmp';
import {Cmp868Component} from './cmp8/cmp';
import {Cmp869Component} from './cmp9/cmp';
@Component({
  selector: 'team8-mod6',
  template: '<div>team8: <cmp-860></cmp-860><cmp-861></cmp-861><cmp-862></cmp-862><cmp-863></cmp-863><cmp-864></cmp-864><cmp-865></cmp-865><cmp-866></cmp-866><cmp-867></cmp-867><cmp-868></cmp-868><cmp-869></cmp-869></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp860Component,Cmp861Component,Cmp862Component,Cmp863Component,Cmp864Component,Cmp865Component,Cmp866Component,Cmp867Component,Cmp868Component,Cmp869Component],
  exports: [Comp],
})
export class Module_airplane_team8_mod6 {}

        