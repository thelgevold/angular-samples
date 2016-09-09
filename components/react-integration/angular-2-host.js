import { Component } from '@angular/core';
import { ReactTreeView } from './react-tree-view';
export var Angular2Host = (function () {
    function Angular2Host() {
    }
    Angular2Host.prototype.ngOnInit = function () {
        ReactTreeView.initialize('Locations');
    };
    Angular2Host.decorators = [
        { type: Component, args: [{
                    selector: 'angular-2-host',
                    templateUrl: './angular-2-host.html'
                },] },
    ];
    Angular2Host.ctorParameters = [];
    return Angular2Host;
}());
