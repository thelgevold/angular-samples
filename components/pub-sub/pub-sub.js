import { Component } from '@angular/core';
import { PubSubService } from './pub-sub-service';
var PubSub = (function () {
    function PubSub() {
    }
    return PubSub;
}());
export { PubSub };
PubSub.decorators = [
    { type: Component, args: [{
                selector: 'pub-sub',
                templateUrl: './pub-sub.html',
                providers: [PubSubService]
            },] },
];
PubSub.ctorParameters = function () { return []; };
