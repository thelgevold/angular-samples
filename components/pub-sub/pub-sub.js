import { Component } from '@angular/core';
import { PubSubService } from './pub-sub-service';
export class PubSub {
}
PubSub.decorators = [
    { type: Component, args: [{
                selector: 'pub-sub',
                templateUrl: './pub-sub.html',
                providers: [PubSubService]
            },] },
];
PubSub.ctorParameters = [];
