import {HTTP_PROVIDERS} from '@angular/http';
import {Component, provide} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {provideForms, disableDeprecatedForms} from '@angular/forms';

import {DemoPage} from './demo-page';
import {About} from './components/about/about';
import {ROUTER_DIRECTIVES, RouteConfig, ROUTER_PROVIDERS, Route, AsyncRoute, Router} from '@angular/router-deprecated';
import {HashLocationStrategy, LocationStrategy, Location} from '@angular/common';
import {AddressBookTitleService} from './components/dependency-injection/address-book-title-service';
import {Message} from './components/aux-route/message';

declare var System:any;

@Component(
{
    selector: 'demo-app',
    templateUrl: './demo-app.html',
    directives:[ROUTER_DIRECTIVES]
})

@RouteConfig([
    new Route({path: '/', component: About, name: 'About', data: {project: 'angular-2-samples'}}),
    new Route({path: '/demo/...', component: DemoPage, name: 'Demo'}),
    new AsyncRoute({
        path: '/lazy',
        loader: () => ComponentHelper.LoadComponentAsync('LazyLoaded','./components/lazy-loaded/lazy-loaded'),
        name: 'Lazy'
    })
])
 
class MyDemoApp {

    router: Router;
    location: Location;

    constructor(router: Router, location: Location) {
        this.router = router;
        this.location = location;
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


class ComponentHelper{

    static LoadComponentAsync(name,path){
        return System.import(path).then(c => c[name]);
    }
}

bootstrap(MyDemoApp,[
          AddressBookTitleService,
          disableDeprecatedForms(),
          provideForms(),
          ROUTER_PROVIDERS, HTTP_PROVIDERS,
          provide(LocationStrategy, {useClass: HashLocationStrategy})]);
