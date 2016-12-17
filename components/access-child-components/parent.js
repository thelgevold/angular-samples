import { Component, ViewChildren } from '@angular/core';
import { Child } from './child';
export class Parent {
    updateViewChildren() {
        this.viewChildren.toArray().forEach((child) => child.setTime(new Date().toTimeString()));
    }
}
Parent.decorators = [
    { type: Component, args: [{
                selector: 'parent',
                template: `<div>
                <button (click)="updateViewChildren()">Update Time via ViewChildren</button>
                <child></child>
                <child></child>
              </div>`
            },] },
];
Parent.ctorParameters = () => [];
Parent.propDecorators = {
    'viewChildren': [{ type: ViewChildren, args: [Child,] },],
};
