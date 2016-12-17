import { Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';
export class RxJsBuffering {
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
}
RxJsBuffering.decorators = [
    { type: Component, args: [{
                template: `
    <h3>Click three numbers to add</h3>
    <div (click)="add(number)" class="box" *ngFor="let number of numbers">{{number}}</div>
    <div class="sum" *ngIf="showSum">SUM: {{calculation.sum}}</div>
  `
            },] },
];
RxJsBuffering.ctorParameters = () => [];
