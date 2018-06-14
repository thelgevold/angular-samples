import {Routes, RouterModule} from '@angular/router';

import {DemoComponent} from './demo.component';

import {TreeViewDemo} from '../shared-components/tree-view/tree-view-demo';
import {ContactList} from '../shared-components/contact-list/contact-list';
import {Spreadsheet} from '../shared-components/spreadsheet/spreadsheet';
import {Algorithms} from '../shared-components/algorithms/algorithms';
import {InputControls} from '../shared-components/input-controls/input-controls';
import {Graph} from '../shared-components/algorithms/graph/graph';
import {PubSub} from '../shared-components/pub-sub/pub-sub';
import {TextEditor} from '../shared-components/text-editor/text-editor';
import {SurveyDemo} from '../shared-components/survey/survey-demo';
import {LogDemo} from '../shared-components/log-tail/log-demo';
import {InputOutputDemo} from '../shared-components/input-output/input-output-demo';
import {RxJsStreams} from '../shared-components/rxjs-streams/rxjs-streams';
import {RxJsBuffering} from '../shared-components/rxjs-buffering/rxjs-buffering';
import {CountryDemo} from '../shared-components/lazy-loaded-tree-view/country-demo';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/demo/spreadsheet',
    pathMatch: 'full',
  },
  {
    path: 'demo',
    component: DemoComponent,
    children: [
      {path: 'spreadsheet', component: Spreadsheet},
      {path: 'algorithms', component: Algorithms},
      {path: 'graph', component: Graph},
      {path: 'pub-sub', component: PubSub},
      {path: 'text-editor', component: TextEditor},
      {path: 'treeview', component: TreeViewDemo},
      {path: 'input', component: InputControls},
      {path: 'contact', component: ContactList},
      {path: 'survey', component: SurveyDemo},
      {path: 'redux', component: LogDemo},
      {path: 'iodemo', component: InputOutputDemo},
      {path: 'rxjs', component: RxJsStreams},
      {path: 'buffering', component: RxJsBuffering},
      {path: 'countries', component: CountryDemo},
    ],
  },
];

export const routing = RouterModule.forRoot(routes);
