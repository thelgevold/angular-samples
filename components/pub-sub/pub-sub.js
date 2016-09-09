import { Component } from '@angular/core';
import { PubSubService } from './pub-sub-service';
export var PubSub = (function () {
    function PubSub() {
    }
    PubSub.decorators = [
        { type: Component, args: [{
                    selector: 'pub-sub',
                    templateUrl: './pub-sub.html',
                    providers: [PubSubService]
                },] },
    ];
    PubSub.ctorParameters = [];
    return PubSub;
}());
