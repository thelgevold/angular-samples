import { Component } from '@angular/core';
import { Location } from '@angular/common';
export class AppComponent {
    constructor(location) {
        this.location = location;
    }
    getLinkStyle(path) {
        if (path === this.location.path()) {
            return true;
        }
        else if (path.length > 0) {
            return this.location.path().indexOf(path) > -1;
        }
    }
}
AppComponent.decorators = [
    { type: Component, args: [{
                selector: 'demo-app',
                templateUrl: './demo-app.html'
            },] },
];
AppComponent.ctorParameters = [
    { type: Location, },
];
