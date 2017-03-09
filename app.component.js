import { Component } from '@angular/core';
import { Location } from '@angular/common';
var AppComponent = (function () {
    function AppComponent(location) {
        this.location = location;
    }
    AppComponent.prototype.getLinkStyle = function (path) {
        if (path === this.location.path()) {
            return true;
        }
        else if (path.length > 0) {
            return this.location.path().indexOf(path) > -1;
        }
    };
    return AppComponent;
}());
export { AppComponent };
AppComponent.decorators = [
    { type: Component, args: [{
                selector: 'demo-app',
                templateUrl: './demo-app.html'
            },] },
];
AppComponent.ctorParameters = function () { return [
    { type: Location, },
]; };
