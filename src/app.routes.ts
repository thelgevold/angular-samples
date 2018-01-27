import { Routes, RouterModule }   from '@angular/router';

import {DemoPage} from './demo-page';
import {AboutComponent} from './components/about/about.component';

import {TreeViewDemo} from './components/tree-view/tree-view-demo';
import {ContactList} from './components/contact-list/contact-list';
import {BoundTextbox} from './components/bound-textbox/bound-textbox';
import {Directory} from './components/tree-view/directory';
import {GridDemo} from './components/grid/grid-demo';
import {Column} from './components/grid/column';
import {IgnoreBindings} from './components/non-bindable/non-bindable';
import {HttpSample} from './components/http/http';
import {Spreadsheet} from './components/spreadsheet/spreadsheet';
import {Algorithms} from './components/algorithms/algorithms';
import {Angular2Host} from './components/react-integration/angular-2-host';
import {JqueryIntegration} from './components/jquery-integration/jquery-integration';
import {InputControls} from './components/input-controls/input-controls';
import {AddressBook} from './components/dependency-injection/address-book';
import {AddressForm} from './components/address-form/address-form';
import {Graph} from './components/algorithms/graph/graph';
import {PubSub} from './components/pub-sub/pub-sub';
import {TextEditor} from './components/text-editor/text-editor';
import {CommentDemo} from './components/change-detection/comment-demo';
import {Parent} from './components/access-child-components/parent';
import {SurveyDemo} from './components/survey/survey-demo';
import {LogDemo} from './components/log-tail/log-demo';
import {InputOutputDemo} from './components/input-output/input-output-demo';
import {CountryDemo} from './components/lazy-loaded-tree-view/country-demo';
import {RxJsStreams} from './components/rxjs-streams/rxjs-streams';
import {CachingDemo} from './components/rxjs-caching/caching-demo';
import {RxJsBuffering} from './components/rxjs-buffering/rxjs-buffering';
import {CarsComponent} from './components/rxjs-error-handling/cars.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  { path: 'about', component: AboutComponent},
  {
    path: 'demo',
    component: DemoPage,
    children: [
      { path: 'spreadsheet', component: Spreadsheet},
      { path: 'jquery', component: JqueryIntegration},
      { path: 'react', component:Angular2Host},
      { path: 'algorithms', component:Algorithms},
      { path: 'graph', component:Graph},
      { path: 'pub-sub', component:PubSub},
      { path: 'text-editor', component:TextEditor},
      { path: 'address', component:AddressBook},
      { path: 'http', component:HttpSample},
      { path: 'treeview', component:TreeViewDemo},
      { path: 'grid', component:GridDemo},
      { path: 'input', component:InputControls},
      { path: 'contact', component:ContactList},
      { path: 'textbox', component:BoundTextbox},
      { path: 'non-bindable', component:IgnoreBindings},
      { path: 'form', component:AddressForm},
      { path: 'change', component:CommentDemo},
      { path: 'parent-child', component:Parent},
      { path: 'survey', component:SurveyDemo},
      { path: 'redux', component:LogDemo},
      { path: 'iodemo', component:InputOutputDemo},
      { path: 'rxjs', component:RxJsStreams},
      { path: 'friends', component:CachingDemo},
      { path: 'buffering', component:RxJsBuffering},
      { path: 'countries', component:CountryDemo},
      { path: 'cars', component:CarsComponent}
    ]
  }
];

export const routing = RouterModule.forRoot(routes);
