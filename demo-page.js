import { Component } from '@angular/core';
import { Location } from '@angular/common';
export class DemoPage {
    constructor(location) {
        this.location = location;
    }
    getLinkStyle(path) {
        return this.location.path().indexOf(path) > -1;
    }
}
DemoPage.decorators = [
    { type: Component, args: [{
                selector: 'demo-page',
                templateUrl: './demo-page.html'
            },] },
];
DemoPage.ctorParameters = () => [
    { type: Location, },
];
