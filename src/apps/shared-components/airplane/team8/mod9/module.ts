
import {Component, NgModule} from '@angular/core';
import {Cmp890Component} from './cmp0/cmp';
import {Cmp891Component} from './cmp1/cmp';
import {Cmp892Component} from './cmp2/cmp';
import {Cmp893Component} from './cmp3/cmp';
import {Cmp894Component} from './cmp4/cmp';
import {Cmp895Component} from './cmp5/cmp';
import {Cmp896Component} from './cmp6/cmp';
import {Cmp897Component} from './cmp7/cmp';
import {Cmp898Component} from './cmp8/cmp';
import {Cmp899Component} from './cmp9/cmp';
@Component({
  selector: 'team8-mod9',
  template: '<div>team8: <cmp-890></cmp-890><cmp-891></cmp-891><cmp-892></cmp-892><cmp-893></cmp-893><cmp-894></cmp-894><cmp-895></cmp-895><cmp-896></cmp-896><cmp-897></cmp-897><cmp-898></cmp-898><cmp-899></cmp-899></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp890Component,Cmp891Component,Cmp892Component,Cmp893Component,Cmp894Component,Cmp895Component,Cmp896Component,Cmp897Component,Cmp898Component,Cmp899Component],
  exports: [Comp],
})
export class Module_airplane_team8_mod9 {}

        