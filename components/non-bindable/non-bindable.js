import { Component } from '@angular/core';
export class IgnoreBindings {
}
IgnoreBindings.decorators = [
    { type: Component, args: [{
                selector: 'ignore-bindings',
                templateUrl: './non-bindable.html'
            },] },
];
IgnoreBindings.ctorParameters = () => [];
