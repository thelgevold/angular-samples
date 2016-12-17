import { Component } from '@angular/core';
export class InputOutputDemo {
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
}
InputOutputDemo.decorators = [
    { type: Component, args: [{
                template: `<button (click)="update()">Update</button>
              <input-output plain="just a simple attribute"
                            fixedValue="another hard coded value"
                            (stringChanged)="myStringChanged($event)"
                            [mySum]="runningTotal"
                            [counter]="count"
                            [headline]="myTitle"
                            [growingString]="myString">
              </input-output>`
            },] },
];
InputOutputDemo.ctorParameters = () => [];
