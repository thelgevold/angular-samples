import {HTTP_PROVIDERS} from '@angular/http';
import {Component} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {provideForms, disableDeprecatedForms} from '@angular/forms';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {HashLocationStrategy, LocationStrategy, Location} from '@angular/common';
import {AddressBookTitleService} from './components/dependency-injection/address-book-title-service';
import {Message} from './components/aux-route/message';
import { APP_ROUTER_PROVIDERS } from './app.routes';

declare var System:any;

@Component(
{
    selector: 'demo-app',
    templateUrl: './demo-app.html',
    directives:[ROUTER_DIRECTIVES]
})

 
class MyDemoApp {

    constructor(public location: Location) {
    }

    getLinkStyle(path) {

        if(path === this.location.path()){
            return true;
        }
        else if(path.length > 0){
            return this.location.path().indexOf(path) > -1;
        }
    }
}


bootstrap(MyDemoApp,[
          provideForms(),
          AddressBookTitleService,
          disableDeprecatedForms(),
          APP_ROUTER_PROVIDERS,
          {provide: LocationStrategy, useClass: HashLocationStrategy},
          HTTP_PROVIDERS]);