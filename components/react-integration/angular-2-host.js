import { Component } from '@angular/core';
import { ReactTreeView } from './react-tree-view';
var Angular2Host = (function () {
    function Angular2Host() {
    }
    Angular2Host.prototype.ngOnInit = function () {
        ReactTreeView.initialize('Locations');
    };
    return Angular2Host;
}());
export { Angular2Host };
Angular2Host.decorators = [
    { type: Component, args: [{
                selector: 'angular-2-host',
                templateUrl: './angular-2-host.html'
            },] },
];
Angular2Host.ctorParameters = function () { return []; };
