import { Component } from '@angular/core';
var Child = (function () {
    function Child() {
    }
    Child.prototype.setTime = function (time) {
        this.time = time;
    };
    return Child;
}());
export { Child };
Child.decorators = [
    { type: Component, args: [{
                selector: 'child',
                template: '<div>{{time}}</div>'
            },] },
];
Child.ctorParameters = function () { return []; };
