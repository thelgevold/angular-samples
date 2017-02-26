var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FriendsService } from './friends-service';
var CachingDemo = (function () {
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
    return CachingDemo;
}());
CachingDemo = __decorate([
    Component({
        providers: [FriendsService],
        templateUrl: './caching-demo.html'
    }),
    __metadata("design:paramtypes", [FriendsService])
], CachingDemo);
export { CachingDemo };
