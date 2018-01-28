import {NgModule} from '@angular/core';
import {SharedModule} from '../shared.module';

import {Consumer} from './consumer';
import {Producer} from './producer';
import {PubSub} from './pub-sub';

@NgModule({
  imports: [SharedModule],
  declarations: [Consumer, Producer, PubSub]    
})
export class PubSubModule {}