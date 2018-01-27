import { BrowserModule }                from '@angular/platform-browser';
import { ReactiveFormsModule }          from '@angular/forms';
import { NgModule }                     from '@angular/core';
import { FormsModule }                  from '@angular/forms';

import { AppComponent }                 from './app.component';
import { DemoComponent }                from './demo.component';
import { routing }                      from './app.routes';
import { HttpModule }                   from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import {TreeView} from '../src/components/tree-view/tree-view';
import {Survey} from '../src/components/survey/survey';
import {Producer} from '../src/components/pub-sub/producer';
import {Consumer} from '../src/components/pub-sub/consumer';
import {InputOutput} from '../src/components/input-output/input-output';
import {Edge} from '../src/components/algorithms/graph/edge';
import {Vertex} from '../src/components/algorithms/graph/vertex';
import {InsertionSort} from '../src/components/insertion-sort/insertion-sort';
import {Child} from '../src/components/access-child-components/child';

import {DemoPage} from '../src/demo-page';
import {TreeViewDemo} from '../src/components/tree-view/tree-view-demo';
import {ContactList} from '../src/components/contact-list/contact-list';
import {Directory} from '../src/components/tree-view/directory';
import {Spreadsheet} from '../src/components/spreadsheet/spreadsheet';
import {Algorithms} from '../src/components/algorithms/algorithms';
import {InputControls} from '../src/components/input-controls/input-controls';
import {Graph} from '../src/components/algorithms/graph/graph';
import {PubSub} from '../src/components/pub-sub/pub-sub';
import {TextEditor} from '../src/components/text-editor/text-editor';
import {SurveyDemo} from '../src/components/survey/survey-demo';
import {LogDemo} from '../src/components/log-tail/log-demo';
import {InputOutputDemo} from '../src/components/input-output/input-output-demo';
import {RxJsStreams} from '../src/components/rxjs-streams/rxjs-streams';
import {RxJsBuffering} from '../src/components/rxjs-buffering/rxjs-buffering';
import {CountryDemo} from '../src/components/lazy-loaded-tree-view/country-demo';
import {LazyTreeView} from '../src/components/lazy-loaded-tree-view/tree-view';

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