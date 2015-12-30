var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require('rxjs/operator/map');
require('rxjs/operator/delay');
require('rxjs/operator/mergeMap');
require('rxjs/observable/interval');
require('rxjs/observable/forkJoin');
var http_1 = require('angular2/http');
var core_1 = require('angular2/core');
var browser_1 = require('angular2/platform/browser');
var demo_page_1 = require('./demo-page');
var about_1 = require('./components/about/about');
var router_1 = require('angular2/router');
var address_book_title_service_1 = require('./components/dependency-injection/address-book-title-service');
var MyDemoApp = (function () {
    function MyDemoApp(router, location) {
        this.router = router;
        this.location = location;
    }
    MyDemoApp.prototype.getLinkStyle = function (path) {
        if (path === this.location.path()) {
            return true;
        }
        else if (path.length > 0) {
            return this.location.path().indexOf(path) > -1;
        }
    };
    MyDemoApp = __decorate([
        core_1.Component({
            selector: 'demo-app',
            templateUrl: './demo-app.html',
            directives: [demo_page_1.DemoPage, about_1.About, router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            new router_1.Route({ path: '/', component: about_1.About, name: 'About', data: { project: 'angular-2-samples' } }),
            new router_1.Route({ path: '/demo/...', component: demo_page_1.DemoPage, name: 'Demo' }),
            new router_1.AsyncRoute({
                path: '/lazy',
                loader: function () { return ComponentHelper.LoadComponentAsync('LazyLoaded', './components/lazy-loaded/lazy-loaded'); },
                name: 'Lazy'
            })
        ]), 
        __metadata('design:paramtypes', [router_1.Router, router_1.Location])
    ], MyDemoApp);
    return MyDemoApp;
})();
var ComponentHelper = (function () {
    function ComponentHelper() {
    }
    ComponentHelper.LoadComponentAsync = function (name, path) {
        return System.import(path).then(function (c) { return c[name]; });
    };
    return ComponentHelper;
})();
browser_1.bootstrap(MyDemoApp, [address_book_title_service_1.AddressBookTitleService, router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS,
    core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })]);
