import { Component } from '@angular/core';
export var Child = (function () {
    function Child() {
    }
    Child.prototype.setTime = function (time) {
        this.time = time;
    };
    Child.decorators = [
        { type: Component, args: [{
                    selector: 'child',
                    template: '<div>{{time}}</div>'
                },] },
    ];
    Child.ctorParameters = [];
    return Child;
}());
