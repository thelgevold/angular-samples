import { Component } from '@angular/core';
export var InputOutputDemo = (function () {
    function InputOutputDemo() {
        this.count = 0;
        this.runningTotal = 0;
        this.myString = '';
        this.myTitle = 'Input/Output Demo';
    }
    InputOutputDemo.prototype.update = function () {
        this.count++;
        this.runningTotal += this.count;
        this.myString += 'A';
    };
    InputOutputDemo.prototype.myStringChanged = function (val) {
        console.log(val);
    };
    InputOutputDemo.decorators = [
        { type: Component, args: [{
                    template: "<button (click)=\"update()\">Update</button>\n              <input-output plain=\"just a simple attribute\"\n                            fixedValue=\"another hard coded value\"\n                            (stringChanged)=\"myStringChanged($event)\"\n                            [mySum]=\"runningTotal\"\n                            [counter]=\"count\"\n                            [headline]=\"myTitle\"\n                            [growingString]=\"myString\">\n              </input-output>"
                },] },
    ];
    InputOutputDemo.ctorParameters = [];
    return InputOutputDemo;
}());
