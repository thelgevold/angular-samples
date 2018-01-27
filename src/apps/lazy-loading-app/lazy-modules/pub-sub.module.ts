import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {PubSub} from '../../shared-components/pub-sub/pub-sub';
import {Producer} from '../../shared-components/pub-sub/producer';
import {Consumer} from '../../shared-components/pub-sub/consumer';

@NgModule({
  declarations: [PubSub, Producer, Consumer],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(
    [
      {path: '', component: PubSub}
    ])
  ]
})
export class PubSubModule {}