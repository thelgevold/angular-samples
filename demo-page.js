import { Component } from '@angular/core';
import { Location } from '@angular/common';
export var DemoPage = (function () {
    function DemoPage(location) {
        this.location = location;
    }
    DemoPage.prototype.getLinkStyle = function (path) {
        return this.location.path().indexOf(path) > -1;
    };
    DemoPage.decorators = [
        { type: Component, args: [{
                    selector: 'demo-page',
                    templateUrl: './demo-page.html'
                },] },
    ];
    DemoPage.ctorParameters = [
        { type: Location, },
    ];
    return DemoPage;
}());
