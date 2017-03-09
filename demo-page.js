import { Component } from '@angular/core';
import { Location } from '@angular/common';
var DemoPage = (function () {
    function DemoPage(location) {
        this.location = location;
    }
    DemoPage.prototype.getLinkStyle = function (path) {
        return this.location.path().indexOf(path) > -1;
    };
    return DemoPage;
}());
export { DemoPage };
DemoPage.decorators = [
    { type: Component, args: [{
                selector: 'demo-page',
                templateUrl: './demo-page.html'
            },] },
];
DemoPage.ctorParameters = function () { return [
    { type: Location, },
]; };
