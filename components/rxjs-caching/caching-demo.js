System.register(['@angular/core', './friends-service'], function(exports_1, context_1) {
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
    var core_1, friends_service_1;
    var CachingDemo;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (friends_service_1_1) {
                friends_service_1 = friends_service_1_1;
            }],
        execute: function() {
            CachingDemo = (function () {
                function CachingDemo(_friendsService) {
                    this._friendsService = _friendsService;
                    this.display = { first: true, second: true };
                }
                CachingDemo.prototype.remove = function (list) {
                    this.display[list] = false;
                };
                CachingDemo.prototype.reset = function () {
                    this.display = { first: true, second: true };
                };
                CachingDemo.prototype.clearCache = function () {
                    this._friendsService.clearCache();
                };
                CachingDemo = __decorate([
                    core_1.Component({
                        providers: [friends_service_1.FriendsService],
                        templateUrl: './components/rxjs-caching/caching-demo.html'
                    }), 
                    __metadata('design:paramtypes', [friends_service_1.FriendsService])
                ], CachingDemo);
                return CachingDemo;
            }());
            exports_1("CachingDemo", CachingDemo);
        }
    }
});
//# sourceMappingURL=caching-demo.js.map