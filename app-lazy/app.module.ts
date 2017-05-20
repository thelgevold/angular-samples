import { BrowserModule }                from '@angular/platform-browser';
import { NgModule }                     from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent }                 from './app.component';
import { AppRoutingModule }             from './app-routing.module';

@NgModule({
  imports: [ BrowserModule, AppRoutingModule ],
  declarations: [ AppComponent ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}