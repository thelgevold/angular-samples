var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var http_1 = require('angular2/http');
var angular2_1 = require('angular2/angular2');
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
        angular2_1.Component({
            selector: 'demo-app',
            templateUrl: './demo-app.html',
            directives: [demo_page_1.DemoPage, about_1.About, router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            new router_1.Route({ path: '/', component: about_1.About, as: 'About' }),
            new router_1.Route({ path: '/demo/...', component: demo_page_1.DemoPage, as: 'Demo' }),
            new router_1.AsyncRoute({
                path: '/lazy',
                loader: function () { return ComponentHelper.LoadComponentAsync('LazyLoaded', './components/lazy-loaded/lazy-loaded'); },
                as: 'Lazy'
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
angular2_1.bootstrap(MyDemoApp, [address_book_title_service_1.AddressBookTitleService, router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS,
    angular2_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })]);
