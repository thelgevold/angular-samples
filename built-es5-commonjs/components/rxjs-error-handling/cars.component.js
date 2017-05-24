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
var Subject_1 = require("rxjs/Subject");
var car_service_1 = require("./car.service");
require("rxjs/add/operator/map");
require("rxjs/add/observable/forkJoin");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/switchMap");
require("rxjs/add/observable/of");
require("rxjs/add/operator/mergeMap");
require("rxjs/add/operator/do");
require("rxjs/add/operator/distinctUntilChanged");
var CarsComponent = (function () {
    function CarsComponent(carService) {
        this.carService = carService;
        this.cars = [{ name: 'Lamborghini', url: './components/rxjs-error-handling/lamborghini.json' },
            { name: 'Ferrari', url: 'ferrari.json' }];
        this.models = [];
        this.error = false;
        this.currentCar = {};
        this.carSubject = new Subject_1.Subject();
    }
    CarsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.carSubject
            .distinctUntilChanged()
            .do(function () { _this.models = []; _this.loading = true; _this.error = false; })
            .switchMap(function (url) { return _this.carService.getModels(url); })
            .subscribe(function (models) {
            _this.error = models.length === 1 && models[0].error;
            _this.models = models.filter(function (m) { return !m.error; });
            _this.loading = false;
        });
    };
    CarsComponent.prototype.getDetails = function (car) {
        this.currentCar = car;
        this.carSubject.next(car.url);
    };
    return CarsComponent;
}());
CarsComponent = __decorate([
    core_1.Component({
        selector: 'cars',
        providers: [car_service_1.CarService],
        styles: [".selected {background-color: gray;color:white;} \n            .error {color: red; font-weight:bold;}\n  "],
        template: "\n  <div>\n      <h1>Cars</h1>\n      <div *ngFor=\"let car of cars\">\n        <a [ngClass]=\"{'selected': car === currentCar}\" (click)=\"getDetails(car)\">{{car.name}}</a>\n      </div>\n      \n      <h4>Models</h4>\n      <div [ngClass]=\"{'error': model.notLoaded}\" *ngFor=\"let model of models\">\n        {{model.name}}\n      </div>\n      \n      <div class=\"error\" *ngIf=\"error\">Error Loading Models</div>\n      <div *ngIf=\"loading\">Loading.....</div>\n    </div> \n  "
    }),
    __metadata("design:paramtypes", [car_service_1.CarService])
], CarsComponent);
exports.CarsComponent = CarsComponent;
