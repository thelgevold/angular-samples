import { Component } from '@angular/core';
import { ReactTreeView } from './react-tree-view';
export class Angular2Host {
    ngOnInit() {
        ReactTreeView.initialize('Locations');
    }
}
Angular2Host.decorators = [
    { type: Component, args: [{
                selector: 'angular-2-host',
                templateUrl: './angular-2-host.html'
            },] },
];
Angular2Host.ctorParameters = () => [];
