import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {Graph} from '../../src/components/algorithms/graph/graph';
import {Edge} from '../../src/components/algorithms/graph/edge';
import {Vertex} from '../../src/components/algorithms/graph/vertex';

import 'rxjs/add/operator/map';

@NgModule({
  declarations: [Graph, Edge, Vertex],
  entryComponents: [Edge],
  imports: [
    CommonModule,
    RouterModule.forChild(
    [
      {path: '', component: Graph}
    ])
  ]
})
export class GraphModule {}