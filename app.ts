import {HTTP_BINDINGS} from 'angular2/http';
import {Component, View, bootstrap, bind} from 'angular2/angular2';
import {DemoPage} from './demo-page';
import {About} from './components/about/about';
import {ROUTER_DIRECTIVES, RouteConfig, Location,routerBindings, LocationStrategy, HashLocationStrategy, Route, Router} from 'angular2/router';

@Component(
    {
        selector: 'demo-app',
        templateUrl: './demo-app.html',
        directives:[DemoPage, About, ROUTER_DIRECTIVES]
    }
)

@RouteConfig([
    new Route({path: '/', component: DemoPage, as: 'Home'}),
    new Route({path: '/about/:id', component: About, as: 'About'})
])
 
class MyDemoApp {

    router: Router;
    location: Location;

    constructor(router: Router, location: Location) {
        this.router = router;
        this.location = location;
    }

    getLinkStyle(path) {
        return this.location.path() === path;
    }
}

bootstrap(MyDemoApp,[routerBindings(MyDemoApp), HTTP_BINDINGS, bind(LocationStrategy).toClass(HashLocationStrategy)]);
