
import {Component, NgModule} from '@angular/core';
import {Cmp870Component} from './cmp0/cmp';
import {Cmp871Component} from './cmp1/cmp';
import {Cmp872Component} from './cmp2/cmp';
import {Cmp873Component} from './cmp3/cmp';
import {Cmp874Component} from './cmp4/cmp';
import {Cmp875Component} from './cmp5/cmp';
import {Cmp876Component} from './cmp6/cmp';
import {Cmp877Component} from './cmp7/cmp';
import {Cmp878Component} from './cmp8/cmp';
import {Cmp879Component} from './cmp9/cmp';
@Component({
  selector: 'team8-mod7',
  template: '<div>team8: <cmp-870></cmp-870><cmp-871></cmp-871><cmp-872></cmp-872><cmp-873></cmp-873><cmp-874></cmp-874><cmp-875></cmp-875><cmp-876></cmp-876><cmp-877></cmp-877><cmp-878></cmp-878><cmp-879></cmp-879></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp870Component,Cmp871Component,Cmp872Component,Cmp873Component,Cmp874Component,Cmp875Component,Cmp876Component,Cmp877Component,Cmp878Component,Cmp879Component],
  exports: [Comp],
})
export class Module_airplane_team8_mod7 {}

        