import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DemoComponent} from './demo.component';
import {routing} from './app.routes';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

import {TreeView} from '../shared-components/tree-view/tree-view';
import {Survey} from '../shared-components/survey/survey';
import {Producer} from '../shared-components/pub-sub/producer';
import {Consumer} from '../shared-components/pub-sub/consumer';
import {InputOutput} from '../shared-components/input-output/input-output';
import {Edge} from '../shared-components/algorithms/graph/edge';
import {Vertex} from '../shared-components/algorithms/graph/vertex';
import {InsertionSort} from '../shared-components/algorithms/insertion-sort';
import {Child} from '../shared-components/access-child-components/child';

import {DemoPage} from '../shared-components/demo-page';
import {TreeViewDemo} from '../shared-components/tree-view/tree-view-demo';
import {ContactList} from '../shared-components/contact-list/contact-list';
import {Directory} from '../shared-components/tree-view/directory';
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
import {LazyTreeView} from '../shared-components/lazy-loaded-tree-view/tree-view';

import {SharedModule} from '../shared-components/shared/shared.module';

@NgModule({
  imports: [BrowserModule, routing, SharedModule],
  declarations: [
    AppComponent,
    Producer,
    Consumer,
    DemoComponent,
    TreeView,
    Survey,
    DemoPage,
    InputOutput,
    Spreadsheet,
    Algorithms,
    Graph,
    PubSub,
    Edge,
    Vertex,
    InsertionSort,
    Child,
    TextEditor,
    TreeViewDemo,
    InputControls,
    ContactList,
    CountryDemo,
    LazyTreeView,
    SurveyDemo,
    LogDemo,
    InputOutputDemo,
    RxJsStreams,
    RxJsBuffering,
  ],
  entryComponents: [Edge],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {}
