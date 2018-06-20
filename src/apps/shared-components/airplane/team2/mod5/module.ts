
import {Component, NgModule} from '@angular/core';
import {Cmp250Component} from './cmp0/cmp';
import {Cmp251Component} from './cmp1/cmp';
import {Cmp252Component} from './cmp2/cmp';
import {Cmp253Component} from './cmp3/cmp';
import {Cmp254Component} from './cmp4/cmp';
import {Cmp255Component} from './cmp5/cmp';
import {Cmp256Component} from './cmp6/cmp';
import {Cmp257Component} from './cmp7/cmp';
import {Cmp258Component} from './cmp8/cmp';
import {Cmp259Component} from './cmp9/cmp';
@Component({
  selector: 'team2-mod5',
  template: '<div>team2: <cmp-250></cmp-250><cmp-251></cmp-251><cmp-252></cmp-252><cmp-253></cmp-253><cmp-254></cmp-254><cmp-255></cmp-255><cmp-256></cmp-256><cmp-257></cmp-257><cmp-258></cmp-258><cmp-259></cmp-259></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp250Component,Cmp251Component,Cmp252Component,Cmp253Component,Cmp254Component,Cmp255Component,Cmp256Component,Cmp257Component,Cmp258Component,Cmp259Component],
  exports: [Comp],
})
export class Module_airplane_team2_mod5 {}

        