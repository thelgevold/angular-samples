/// <reference path="../../typings/tsd.d.ts" />
System.register(['angular2/core', './lazy-message'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, lazy_message_1;
    var LazyLoaded;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (lazy_message_1_1) {
                lazy_message_1 = lazy_message_1_1;
            }],
        execute: function() {
            LazyLoaded = (function () {
                function LazyLoaded() {
                }
                LazyLoaded = __decorate([
                    core_1.Component({
                        selector: 'lazy-loaded',
                        templateUrl: './components/lazy-loaded/lazy-loaded.html',
                        directives: [lazy_message_1.LazyMessage]
                    }), 
                    __metadata('design:paramtypes', [])
                ], LazyLoaded);
                return LazyLoaded;
            })();
            exports_1("LazyLoaded", LazyLoaded);
        }
    }
});
