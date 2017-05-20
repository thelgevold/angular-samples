import {Routes, RouterModule}   from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/spreadsheet',
    pathMatch: 'full'
  },
  {
    path: 'spreadsheet',
    loadChildren: './lazy-modules/spreadsheet.module#SpreadsheetModule'
  },
  {
    path: 'countries',
    loadChildren: './lazy-modules/lazy-loaded-treeview.module#LazyTreeviewModule'
  },
  {
    path: 'streams',
    loadChildren: './lazy-modules/rxjs-streams.module#RxJsStreamsModule'
  },
  {
    path: 'graph',
    loadChildren: './lazy-modules/graph.module#GraphModule'
  },
  {
    path: 'sort',
    loadChildren: './lazy-modules/insertion-sort.module#InsertionSortModule'
  }
]
export const AppRoutingModule = RouterModule.forRoot(routes);
