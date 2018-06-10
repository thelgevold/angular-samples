import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';

import {Algorithms} from './algorithms';
import {Edge} from './graph/edge';
import {Graph} from './graph/graph';
import {Vertex} from './graph/vertex';
import {InsertionSort} from './insertion-sort';

@NgModule({
  imports: [SharedModule],
  declarations: [Algorithms, Edge, Graph, InsertionSort, Vertex],
  entryComponents: [Edge],
})
export class AlgorithmsModule {}
