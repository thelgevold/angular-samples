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
  },
  {
    path: 'redux',
    loadChildren: './lazy-modules/redux.module#ReduxModule'
  },
  {
    path: 'buffering',
    loadChildren: './lazy-modules/rxjs-buffering.module#RxJsBufferingModule'
  },
  {
    path: 'dynamic-form',
    loadChildren: './lazy-modules/dynamic-form.module#DynamicFormModule'
  },
  {
    path: 'pub-sub',
    loadChildren: './lazy-modules/pub-sub.module#PubSubModule'
  },
  {
    path: 'text-editor',
    loadChildren: './lazy-modules/text-editor.module#TextEditorModule'
  },
  {
    path: 'input-controls',
    loadChildren: './lazy-modules/input-controls.module#InputControlsModule'
  }
]
export const AppRoutingModule = RouterModule.forRoot(routes);
