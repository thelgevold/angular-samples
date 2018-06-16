import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DemoComponent} from './demo.component';

import {AlgorithmsModule} from '../shared-components/algorithms/algorithms.module';
import {GridModule} from '../shared-components/grid/grid.module';
import {InputControlsModule} from '../shared-components/input-controls/input-controls.module';
import {InputOutputModule} from '../shared-components/input-output/input-output.module';
import {LazyLoadedTreeViewModule} from '../shared-components/lazy-loaded-tree-view/lazy-loaded-tree-view.module';
import {LogTailModule} from '../shared-components/log-tail/log-tail.module';
import {PubSubModule} from '../shared-components/pub-sub/pub-sub.module';
import {TreeViewModule} from '../shared-components/tree-view/tree-view.module';
import {TextEditorModule} from '../shared-components/text-editor/text-editor.module';
import {SurveyModule} from '../shared-components/survey/survey.module';
import {SpreadsheetModule} from '../shared-components/spreadsheet/spreadsheet.module';
import {RxJsStreamsModule} from '../shared-components/rxjs-streams/rxjs-streams.module';
import {RxJsBufferingModule} from '../shared-components/rxjs-buffering/rxjs-buffering.module';
import {routing} from './app.routes';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    GridModule,
    RxJsBufferingModule,
    InputOutputModule,
    SurveyModule,
    RxJsStreamsModule,
    TextEditorModule,
    TreeViewModule,
    SpreadsheetModule,
    LazyLoadedTreeViewModule,
    PubSubModule,
    routing,
    LogTailModule,
    InputControlsModule,
    AlgorithmsModule,
  ],
  declarations: [AppComponent, DemoComponent],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {}
