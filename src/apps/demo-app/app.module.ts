import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

import {AppComponent} from './app.component';

import {routes} from './app.routes';
import {DemoPageModule} from '../shared-components/demo-page.module';

import {AlgorithmsModule} from '../shared-components/algorithms/algorithms.module';
import {AddressBookModule} from '../shared-components/dependency-injection/address-book.module';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    DemoPageModule,
    AlgorithmsModule,
    AddressBookModule,
  ],
  declarations: [AppComponent],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {}
