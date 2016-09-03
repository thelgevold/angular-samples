import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { HttpModule } from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AddressBookTitleService } from './components/dependency-injection/address-book-title-service';
import { TreeView } from './components/tree-view/tree-view';
import { LazyTreeView } from './components/lazy-loaded-tree-view/tree-view';
import { Survey } from './components/survey/survey';
import { FriendsList } from './components/rxjs-caching/friends-list';
import { Producer } from './components/pub-sub/producer';
import { Consumer } from './components/pub-sub/consumer';
import { InputOutput } from './components/input-output/input-output';
import { Grid } from './components/grid/grid';
import { CommentSection1 } from './components/change-detection/comment-section-1';
import { CommentSection2 } from './components/change-detection/comment-section-2';
import { Edge } from './components/algorithms/graph/edge';
import { Vertex } from './components/algorithms/graph/vertex';
import { InsertionSort } from './components/insertion-sort/insertion-sort';
import { Child } from './components/access-child-components/child';
import { DemoPage } from './demo-page';
import { About } from './components/about/about';
import { TreeViewDemo } from './components/tree-view/tree-view-demo';
import { ContactList } from './components/contact-list/contact-list';
import { BoundTextbox } from './components/bound-textbox/bound-textbox';
import { GridDemo } from './components/grid/grid-demo';
import { IgnoreBindings } from './components/non-bindable/non-bindable';
import { HttpSample } from './components/http/http';
import { Spreadsheet } from './components/spreadsheet/spreadsheet';
import { Algorithms } from './components/algorithms/algorithms';
import { Angular2Host } from './components/react-integration/angular-2-host';
import { JqueryIntegration } from './components/jquery-integration/jquery-integration';
import { InputControls } from './components/input-controls/input-controls';
import { AddressBook } from './components/dependency-injection/address-book';
import { AddressForm } from './components/address-form/address-form';
import { Graph } from './components/algorithms/graph/graph';
import { PubSub } from './components/pub-sub/pub-sub';
import { TextEditor } from './components/text-editor/text-editor';
import { CommentDemo } from './components/change-detection/comment-demo';
import { Parent } from './components/access-child-components/parent';
import { SurveyDemo } from './components/survey/survey-demo';
import { LogDemo } from './components/log-tail/log-demo';
import { InputOutputDemo } from './components/input-output/input-output-demo';
import { CountryDemo } from './components/lazy-loaded-tree-view/country-demo';
import { RxJsStreams } from './components/rxjs-streams/rxjs-streams';
import { CachingDemo } from './components/rxjs-caching/caching-demo';
import { RxJsBuffering } from './components/rxjs-buffering/rxjs-buffering';
export class AppModule {
}
AppModule.decorators = [
    { type: NgModule, args: [{
                imports: [BrowserModule, ReactiveFormsModule, routing, FormsModule, HttpModule],
                declarations: [AppComponent, FriendsList, Producer, Consumer,
                    TreeView, LazyTreeView, Survey, About, DemoPage, InputOutput,
                    Spreadsheet, JqueryIntegration, Angular2Host, Algorithms, Graph, PubSub,
                    Grid, CommentSection1, CommentSection2, Edge, Vertex, InsertionSort, Child,
                    TextEditor, AddressBook, HttpSample, TreeViewDemo, GridDemo, InputControls,
                    ContactList, BoundTextbox, IgnoreBindings, AddressForm, CommentDemo, Parent,
                    SurveyDemo, LogDemo, InputOutputDemo, RxJsStreams, CachingDemo, RxJsBuffering, CountryDemo
                ],
                entryComponents: [Edge],
                providers: [
                    AddressBookTitleService,
                    { provide: LocationStrategy, useClass: HashLocationStrategy }
                ],
                bootstrap: [AppComponent]
            },] },
];
AppModule.ctorParameters = [];
