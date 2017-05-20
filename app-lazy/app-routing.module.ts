import {Routes, RouterModule}   from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/spreadsheet',
    pathMatch: 'full'
  },
  {
    path: 'spreadsheet',
    loadChildren: './spreadsheet.module#SpreadsheetModule'
  },
  {
    path: 'countries',
    loadChildren: './lazy-loaded-treeview.module#LazyTreeviewModule'
  }
]
export const AppRoutingModule = RouterModule.forRoot(routes);
