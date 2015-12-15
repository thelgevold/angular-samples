import 'rxjs/operator/map';
import 'rxjs/operator/mergeMap';
import 'rxjs/observable/interval'

import {HTTP_PROVIDERS} from 'angular2/http';
import {Component, View, provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

import {DemoPage} from './demo-page';
import {About} from './components/about/about';
import {ROUTER_DIRECTIVES, RouteConfig, Location,ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy, Route, AsyncRoute, Router} from 'angular2/router';
import {AddressBookTitleService} from './components/dependency-injection/address-book-title-service';

declare var System:any;

@Component(
{
    selector: 'demo-app',
    templateUrl: './demo-app.html',
    directives:[DemoPage, About, ROUTER_DIRECTIVES]
})

@RouteConfig([
    new Route({path: '/', component: About, name: 'About'}),
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

bootstrap(MyDemoApp,[AddressBookTitleService,ROUTER_PROVIDERS, HTTP_PROVIDERS,
          provide(LocationStrategy, {useClass: HashLocationStrategy})]);
