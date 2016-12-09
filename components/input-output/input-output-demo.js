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
export let InputOutputDemo = class InputOutputDemo {
    constructor() {
        this.count = 0;
        this.runningTotal = 0;
        this.myString = '';
        this.myTitle = 'Input/Output Demo';
    }
    update() {
        this.count++;
        this.runningTotal += this.count;
        this.myString += 'A';
    }
    myStringChanged(val) {
        console.log(val);
    }
};
InputOutputDemo = __decorate([
    Component({
        template: `<button (click)="update()">Update</button>
              <input-output plain="just a simple attribute"
                            fixedValue="another hard coded value"
                            (stringChanged)="myStringChanged($event)"
                            [mySum]="runningTotal"
                            [counter]="count"
                            [headline]="myTitle"
                            [growingString]="myString">
              </input-output>`
    }), 
    __metadata('design:paramtypes', [])
], InputOutputDemo);
