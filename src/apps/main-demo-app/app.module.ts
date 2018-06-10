import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

import {AppComponent} from './app.component';

import {routing} from './app.routes';
import {DemoPageModule} from '../shared-components/demo-page.module';

//import {AboutModule} from '../shared-components/about/about.module';
import {AlgorithmsModule} from '../shared-components/algorithms/algorithms.module';
// import {BoundTextboxModule} from '../shared-components/bound-textbox/bound-textbox.module';
// import {ChangeDetectionModule} from '../shared-components/change-detection/change-detection.module';
// import {AccessChildModule} from '../shared-components/access-child-components/access-child.module';
// import {ContactListModule} from '../shared-components/contact-list/contact-list.module';
import {AddressBookModule} from '../shared-components/dependency-injection/address-book.module';
// import {GridModule} from '../shared-components/grid/grid.module';
// import {HttpSampleModule} from '../shared-components/http/http.sample.module';
// import {InputControlsModule} from '../shared-components/input-controls/input-controls.module';
// import {InputOutputModule} from '../shared-components/input-output/input-output.module';
// import {JQueryIntegrationModule} from '../shared-components/jquery-integration/jquery-integration.module';
// import {LazyLoadedTreeViewModule} from '../shared-components/lazy-loaded-tree-view/lazy-loaded-tree-view.module';
// import {LogTailModule} from '../shared-components/log-tail/log-tail.module';
// import {PubSubModule} from '../shared-components/pub-sub/pub-sub.module';
// import {ReactIntegrationModule} from '../shared-components/react-integration/react-integration.module';
// import {TreeViewModule} from '../shared-components/tree-view/tree-view.module';
// import {TextEditorModule} from '../shared-components/text-editor/text-editor.module';
// import {SurveyModule} from '../shared-components/survey/survey.module';
// import {SpreadsheetModule} from '../shared-components/spreadsheet/spreadsheet.module';
// import {RxJsStreamsModule} from '../shared-components/rxjs-streams/rxjs-streams.module';
// import {AddressFormModule} from '../shared-components/address-form/address-form.module';
// import {RxJsErrorHandlingModule} from '../shared-components/rxjs-error-handling/rxjs-error-handling.module';
// import {RxJsCachingModule} from '../shared-components/rxjs-caching/rxjs-caching.module';
// import {RxJsBufferingModule} from '../shared-components/rxjs-buffering/rxjs-buffering.module';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    DemoPageModule,
    //AboutModule,
    AlgorithmsModule,
    // BoundTextboxModule,
    // ChangeDetectionModule,
    // AccessChildModule,
    // ContactListModule,
    AddressBookModule,
    // GridModule,
    // HttpSampleModule,
    // InputControlsModule,
    // InputOutputModule,
    // JQueryIntegrationModule,
    // LazyLoadedTreeViewModule,
    // LogTailModule,
    // PubSubModule,
    // ReactIntegrationModule,
    // TreeViewModule,
    // TextEditorModule,
    // SurveyModule,
    // SpreadsheetModule,
    // RxJsStreamsModule,
    // AddressFormModule,
    // RxJsErrorHandlingModule,
    // RxJsCachingModule,
    // RxJsBufferingModule,
  ],
  declarations: [AppComponent],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {}
