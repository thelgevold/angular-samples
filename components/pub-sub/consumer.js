import { Component } from '@angular/core';
import { PubSubService } from './pub-sub-service';
export class Consumer {
    constructor(pubSubService) {
        this.pubSubService = pubSubService;
        this.processed = [];
        this.subscription = null;
    }
    ngOnInit() {
        this.subscription = this.pubSubService.Stream.subscribe(customer => this.processCustomer(customer));
    }
    processCustomer(customer) {
        this.processed.push(customer);
    }
    stopProcessing() {
        this.subscription.unsubscribe();
    }
}
Consumer.decorators = [
    { type: Component, args: [{
                selector: 'consumer',
                templateUrl: './consumer.html'
            },] },
];
Consumer.ctorParameters = () => [
    { type: PubSubService, },
];
