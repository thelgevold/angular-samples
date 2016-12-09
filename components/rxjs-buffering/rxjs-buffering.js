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
import { Subject } from 'rxjs/Subject';
export let RxJsBuffering = class RxJsBuffering {
    constructor() {
        this.numbers = [1, 2, 3, 4, 5];
        this.sum = new Subject();
        this.calculation = {};
        this.showSum = false;
    }
    add(number) {
        this.sum.next(number);
    }
    ngOnInit() {
        this.series = this.sum
            .asObservable()
            .do(a => this.showSum = false)
            .bufferCount(3)
            .subscribe(res => {
            this.calculation = { sum: res.reduce((a, b) => a + b) };
            this.showSum = true;
        });
    }
};
RxJsBuffering = __decorate([
    Component({
        template: `
    <h3>Click three numbers to add</h3>
    <div (click)="add(number)" class="box" *ngFor="let number of numbers">{{number}}</div>
    <div class="sum" *ngIf="showSum">SUM: {{calculation.sum}}</div>
  `
    }), 
    __metadata('design:paramtypes', [])
], RxJsBuffering);
