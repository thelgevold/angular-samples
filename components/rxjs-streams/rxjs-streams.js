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
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/concat';
export let RxJsStreams = class RxJsStreams {
    constructor() {
        this.concatStream = [];
        this.mergeStream = [];
        this.forkJoinStream = [];
        this.flatMappedStreams = {};
    }
    flatMapStreams() {
        let first = Observable.of(10);
        first.flatMap((operand1) => {
            return Observable.of(operand1 + 10);
        })
            .subscribe(res => this.flatMappedStreams = { msg: '10 + 10 = ' + res });
    }
    concatStreams() {
        let first = Observable.timer(10, 500).map(r => {
            return { source: 1, value: r };
        }).take(4);
        let second = Observable.timer(10, 500).map(r => {
            return { source: 2, value: r };
        }).take(4);
        first.concat(second).subscribe(res => this.concatStream.push(res));
    }
    mergeStreams() {
        let first = Observable.timer(10, 500).map(r => {
            return { source: 1, value: r };
        }).take(4);
        let second = Observable.timer(10, 500).map(r => {
            return { source: 2, value: r };
        }).take(4);
        first.merge(second).subscribe(res => this.mergeStream.push(res));
    }
    forkJoinStreams() {
        let first = Observable.of({ source: 1, value: 1 });
        let second = Observable.of({ source: 2, value: 1 });
        Observable.forkJoin(first, second)
            .subscribe((res) => this.forkJoinStream = res);
    }
};
RxJsStreams = __decorate([
    Component({
        selector: 'rxjs-streams',
        templateUrl: './rxjs-streams.html'
    }), 
    __metadata('design:paramtypes', [])
], RxJsStreams);
