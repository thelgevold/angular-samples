"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var CarService = (function () {
    function CarService(http) {
        this.http = http;
    }
    CarService.prototype.getModels = function (url) {
        var _this = this;
        return this.http
            .get(url)
            .map(function (response) { return response.json().models; })
            .catch(function (error) { return Observable_1.Observable.of({ error: true }); })
            .flatMap(function (models) { return Observable_1.Observable
            .forkJoin(models.length ? models.map(function (url) { return _this.http.get(url)
            .map(function (response) { return response.json(); })
            .catch(function (e) { return Observable_1.Observable.of({ notLoaded: true, name: "ERROR Loading " + url + "!" }); }); })
            : Observable_1.Observable.of({ error: models.error })); });
    };
    return CarService;
}());
CarService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CarService);
exports.CarService = CarService;
