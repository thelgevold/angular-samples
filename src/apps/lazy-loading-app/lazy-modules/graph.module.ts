import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {Graph} from '../../shared-components/algorithms/graph/graph';
import {Edge} from '../../shared-components/algorithms/graph/edge';
import {Vertex} from '../../shared-components/algorithms/graph/vertex';

@NgModule({
  declarations: [Graph, Edge, Vertex],
  entryComponents: [Edge],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: Graph}]),
  ],
})
export class GraphModule {}
