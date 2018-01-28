import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Algorithms} from './algorithms';
import {Edge} from './graph/edge';
import {Graph} from './graph/graph';
import {Vertex} from './graph/vertex';
import {InsertionSort} from './insertion-sort';

@NgModule({
  imports: [CommonModule],  
  declarations: [Algorithms, Edge, Graph, InsertionSort, Vertex],
  entryComponents: [Edge]
})
export class AlgorithmsModule {}