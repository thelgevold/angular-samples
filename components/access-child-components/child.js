import { Component } from '@angular/core';
export class Child {
    setTime(time) {
        this.time = time;
    }
}
Child.decorators = [
    { type: Component, args: [{
                selector: 'child',
                template: '<div>{{time}}</div>'
            },] },
];
Child.ctorParameters = () => [];
