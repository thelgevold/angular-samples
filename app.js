///<reference path="node_modules/angular2/typings/browser.d.ts"/>
System.register(['rxjs/add/operator/map', 'rxjs/add/operator/delay', 'rxjs/add/operator/mergeMap', 'rxjs/add/observable/interval', 'rxjs/add/observable/forkJoin', 'rxjs/add/operator/publishReplay', 'angular2/http', 'angular2/core', 'angular2/platform/browser', './demo-page', './components/about/about', 'angular2/router', './components/dependency-injection/address-book-title-service', './components/aux-route/message'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1, browser_1, demo_page_1, about_1, router_1, address_book_title_service_1, message_1;
    var MyDemoApp, ComponentHelper;
    return {
        setters:[
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (_5) {},
            function (_6) {},
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (demo_page_1_1) {
                demo_page_1 = demo_page_1_1;
            },
            function (about_1_1) {
                about_1 = about_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (address_book_title_service_1_1) {
                address_book_title_service_1 = address_book_title_service_1_1;
            },
            function (message_1_1) {
                message_1 = message_1_1;
            }],
        execute: function() {
            MyDemoApp = (function () {
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
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        new router_1.Route({ path: '/', component: about_1.About, name: 'About', data: { project: 'angular-2-samples' } }),
                        new router_1.Route({ path: '/demo/...', component: demo_page_1.DemoPage, name: 'Demo' }),
                        new router_1.AuxRoute({ path: '/msg', component: message_1.Message, name: 'Msg' }),
                        new router_1.AsyncRoute({
                            path: '/lazy',
                            loader: function () { return ComponentHelper.LoadComponentAsync('LazyLoaded', './components/lazy-loaded/lazy-loaded'); },
                            name: 'Lazy'
                        })
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.Location])
                ], MyDemoApp);
                return MyDemoApp;
            }());
            ComponentHelper = (function () {
                function ComponentHelper() {
                }
                ComponentHelper.LoadComponentAsync = function (name, path) {
                    return System.import(path).then(function (c) { return c[name]; });
                };
                return ComponentHelper;
            }());
            browser_1.bootstrap(MyDemoApp, [address_book_title_service_1.AddressBookTitleService, router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS,
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })]);
        }
    }
});
//# sourceMappingURL=app.js.map