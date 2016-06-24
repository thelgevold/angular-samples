System.register(['@angular/http', '@angular/core', '@angular/platform-browser-dynamic', '@angular/forms', '@angular/router', '@angular/common', './components/dependency-injection/address-book-title-service', './app.routes'], function(exports_1, context_1) {
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
    var http_1, core_1, platform_browser_dynamic_1, forms_1, router_1, common_1, address_book_title_service_1, app_routes_1;
    var MyDemoApp;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (address_book_title_service_1_1) {
                address_book_title_service_1 = address_book_title_service_1_1;
            },
            function (app_routes_1_1) {
                app_routes_1 = app_routes_1_1;
            }],
        execute: function() {
            MyDemoApp = (function () {
                function MyDemoApp(location) {
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
                    __metadata('design:paramtypes', [common_1.Location])
                ], MyDemoApp);
                return MyDemoApp;
            }());
            platform_browser_dynamic_1.bootstrap(MyDemoApp, [
                forms_1.provideForms(),
                address_book_title_service_1.AddressBookTitleService,
                forms_1.disableDeprecatedForms(),
                app_routes_1.APP_ROUTER_PROVIDERS,
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
                http_1.HTTP_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=main.js.map