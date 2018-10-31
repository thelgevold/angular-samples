import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {DemoPage} from '../shared-components/demo-page';
import {AboutComponent} from '../shared-components/about/about.component';

import {TreeViewDemo} from '../shared-components/tree-view/tree-view-demo';
import {ContactList} from '../shared-components/contact-list/contact-list';
import {BoundTextbox} from '../shared-components/bound-textbox/bound-textbox';
import {GridDemo} from '../shared-components/grid/grid-demo';
import {HttpSample} from '../shared-components/http/http';
import {Spreadsheet} from '../shared-components/spreadsheet/spreadsheet';
import {Algorithms} from '../shared-components/algorithms/algorithms';
import {AngularHost} from '../shared-components/react-integration/angular-host';
import {JqueryIntegration} from '../shared-components/jquery-integration/jquery-integration';
import {InputControls} from '../shared-components/input-controls/input-controls';
import {AddressBook} from '../shared-components/dependency-injection/address-book';
import {AddressForm} from '../shared-components/address-form/address-form';
import {Graph} from '../shared-components/algorithms/graph/graph';
import {PubSub} from '../shared-components/pub-sub/pub-sub';
import {TextEditor} from '../shared-components/text-editor/text-editor';
import {CommentDemo} from '../shared-components/change-detection/comment-demo';
import {Parent} from '../shared-components/access-child-components/parent';
import {SurveyDemo} from '../shared-components/survey/survey-demo';
import {LogDemo} from '../shared-components/log-tail/log-demo';
import {InputOutputDemo} from '../shared-components/input-output/input-output-demo';
import {CountryDemo} from '../shared-components/lazy-loaded-tree-view/country-demo';
import {RxJsStreams} from '../shared-components/rxjs-streams/rxjs-streams';
import {CachingDemo} from '../shared-components/rxjs-caching/caching-demo';
import {RxJsBuffering} from '../shared-components/rxjs-buffering/rxjs-buffering';
import {CarsComponent} from '../shared-components/rxjs-error-handling/cars.component';
import {SvelteComponent} from '../shared-components/svelte-integration/svelte.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/demo/spreadsheet',
    pathMatch: 'full',
  },
  {path: 'about', component: AboutComponent},
  {
    path: 'demo',
    component: DemoPage,
    children: [
      {path: 'spreadsheet', component: Spreadsheet},
      {path: 'jquery', component: JqueryIntegration},
      {path: 'react', component: AngularHost},
      {path: 'algorithms', component: Algorithms},
      {path: 'graph', component: Graph},
      {path: 'pub-sub', component: PubSub},
      {path: 'text-editor', component: TextEditor},
      {path: 'address', component: AddressBook},
      {path: 'http', component: HttpSample},
      {path: 'treeview', component: TreeViewDemo},
      {path: 'grid', component: GridDemo},
      {path: 'input', component: InputControls},
      {path: 'contact', component: ContactList},
      {path: 'textbox', component: BoundTextbox},
      {path: 'form', component: AddressForm},
      {path: 'change', component: CommentDemo},
      {path: 'parent-child', component: Parent},
      {path: 'survey', component: SurveyDemo},
      {path: 'redux', component: LogDemo},
      {path: 'iodemo', component: InputOutputDemo},
      {path: 'rxjs', component: RxJsStreams},
      {path: 'friends', component: CachingDemo},
      {path: 'buffering', component: RxJsBuffering},
      {path: 'countries', component: CountryDemo},
      {path: 'cars', component: CarsComponent},
      {path: 'svelte', component: SvelteComponent},
    ],
  },
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
