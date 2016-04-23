System.register(['angular2/core', './friends-service'], function(exports_1, context_1) {
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
    var FriendsList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (friends_service_1_1) {
                friends_service_1 = friends_service_1_1;
            }],
        execute: function() {
            FriendsList = (function () {
                function FriendsList(_friendsServce) {
                    this._friendsServce = _friendsServce;
                    this.friends = [];
                }
                FriendsList.prototype.loadData = function () {
                    var _this = this;
                    this.subscription = this._friendsServce
                        .getFriends()
                        .subscribe(function (res) { return _this.friends = res; }, function (error) { return console.log(error); });
                };
                FriendsList.prototype.ngOnInit = function () {
                    this.loadData();
                };
                FriendsList.prototype.ngOnDestroy = function () {
                    this.subscription.unsubscribe();
                    console.log('Destroyed');
                };
                FriendsList = __decorate([
                    core_1.Component({
                        selector: 'friends-list',
                        template: "\n    <div *ngFor=\"#friend of friends\">\n      {{friend}}\n    </div>\n    <button (click)=\"loadData()\">Reload</button>\n  "
                    }), 
                    __metadata('design:paramtypes', [friends_service_1.FriendsService])
                ], FriendsList);
                return FriendsList;
            }());
            exports_1("FriendsList", FriendsList);
        }
    }
});
//# sourceMappingURL=friends-list.js.map