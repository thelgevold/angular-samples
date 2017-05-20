import { BrowserModule }                from '@angular/platform-browser';
import { ReactiveFormsModule }          from '@angular/forms';
import { NgModule }                     from '@angular/core';
import { FormsModule }                  from '@angular/forms';

import { AppComponent }                 from './app.component';
import { DemoComponent }                from './demo.component';
import { routing }                      from './app.routes';
import { HttpModule }                   from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import {TreeView} from '../components/tree-view/tree-view';
import {Survey} from '../components/survey/survey';
import {Producer} from '../components/pub-sub/producer';
import {Consumer} from '../components/pub-sub/consumer';
import {InputOutput} from '../components/input-output/input-output';
import {Edge} from '../components/algorithms/graph/edge';
import {Vertex} from '../components/algorithms/graph/vertex';
import {InsertionSort} from '../components/insertion-sort/insertion-sort';
import {Child} from '../components/access-child-components/child';

import {DemoPage} from '../demo-page';
import {TreeViewDemo} from '../components/tree-view/tree-view-demo';
import {ContactList} from '../components/contact-list/contact-list';
import {Directory} from '../components/tree-view/directory';
import {Spreadsheet} from '../components/spreadsheet/spreadsheet';
import {Algorithms} from '../components/algorithms/algorithms';
import {InputControls} from '../components/input-controls/input-controls';
import {Graph} from '../components/algorithms/graph/graph';
import {PubSub} from '../components/pub-sub/pub-sub';
import {TextEditor} from '../components/text-editor/text-editor';
import {SurveyDemo} from '../components/survey/survey-demo';
import {LogDemo} from '../components/log-tail/log-demo';
import {InputOutputDemo} from '../components/input-output/input-output-demo';
import {RxJsStreams} from '../components/rxjs-streams/rxjs-streams';
import {RxJsBuffering} from '../components/rxjs-buffering/rxjs-buffering';
import {CountryDemo} from '../components/lazy-loaded-tree-view/country-demo';
import {LazyTreeView} from '../components/lazy-loaded-tree-view/tree-view';

@NgModule({
  imports: [ BrowserModule, ReactiveFormsModule, routing, FormsModule, HttpModule ],
  declarations: [ AppComponent, Producer, Consumer, DemoComponent,
    TreeView, Survey, DemoPage, InputOutput,
    Spreadsheet, Algorithms, Graph, PubSub,
    Edge, Vertex, InsertionSort, Child,
    TextEditor, TreeViewDemo, InputControls,
    ContactList, CountryDemo, LazyTreeView,
    SurveyDemo, LogDemo, InputOutputDemo, RxJsStreams, RxJsBuffering
  ],
  entryComponents: [Edge],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}