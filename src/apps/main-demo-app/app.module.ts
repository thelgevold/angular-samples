import { BrowserModule }                from '@angular/platform-browser';
import { NgModule }                     from '@angular/core';

import { AppComponent }                 from './app.component';
import { routing }                       from './app.routes';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import {AddressBookTitleService}        from '../shared-components/dependency-injection/address-book-title-service';

import {TreeView} from '../shared-components/tree-view/tree-view';
import {LazyTreeView} from '../shared-components/lazy-loaded-tree-view/tree-view';
import {Survey} from '../shared-components/survey/survey';
import {FriendsList} from '../shared-components/rxjs-caching/friends-list';
import {Producer} from '../shared-components/pub-sub/producer';
import {Consumer} from '../shared-components/pub-sub/consumer';
import {InputOutput} from '../shared-components/input-output/input-output';
import {Grid} from '../shared-components/grid/grid';
import {CommentSection1} from '../shared-components/change-detection/comment-section-1';
import {CommentSection2} from '../shared-components/change-detection/comment-section-2';
import {Child} from '../shared-components/access-child-components/child';

import {DemoPage} from '../shared-components/demo-page';
import {TreeViewDemo} from '../shared-components/tree-view/tree-view-demo';
import {ContactList} from '../shared-components/contact-list/contact-list';
import {BoundTextbox} from '../shared-components/bound-textbox/bound-textbox';
import {Directory} from '../shared-components/tree-view/directory';
import {GridDemo} from '../shared-components/grid/grid-demo';
import {Column} from '../shared-components/grid/column';
import {IgnoreBindings} from '../shared-components/non-bindable/non-bindable';
import {HttpSample} from '../shared-components/http/http';
import {Spreadsheet} from '../shared-components/spreadsheet/spreadsheet';
import {Angular2Host} from '../shared-components/react-integration/angular-2-host';
import {JqueryIntegration} from '../shared-components/jquery-integration/jquery-integration';
import {InputControls} from '../shared-components/input-controls/input-controls';
import {AddressBook} from '../shared-components/dependency-injection/address-book';
import {AddressForm} from '../shared-components/address-form/address-form';
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

import {SharedModule} from '../shared-components/shared.module';
import {AboutModule} from '../shared-components/about/about.module';
import {AlgorithmsModule} from '../shared-components/algorithms/algorithms.module';

@NgModule({
  imports: [ BrowserModule, SharedModule, routing, AboutModule, AlgorithmsModule ],
  declarations: [ AppComponent, FriendsList, Producer, Consumer,
    TreeView, LazyTreeView, Survey, DemoPage, InputOutput,
    Spreadsheet, JqueryIntegration, Angular2Host, PubSub,
    Grid, CommentSection1, CommentSection2, Child,
    TextEditor, AddressBook, HttpSample, TreeViewDemo, GridDemo, InputControls,
    ContactList, BoundTextbox, IgnoreBindings, AddressForm, CommentDemo, Parent, CarsComponent,
    SurveyDemo, LogDemo, InputOutputDemo, RxJsStreams, CachingDemo, RxJsBuffering, CountryDemo
  ],
  providers: [
    AddressBookTitleService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}