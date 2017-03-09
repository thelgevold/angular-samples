import { Component } from '@angular/core';
import { PubSubService } from './pub-sub-service';
var Consumer = (function () {
    function Consumer(pubSubService) {
        this.pubSubService = pubSubService;
        this.processed = [];
        this.subscription = null;
    }
    Consumer.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.pubSubService.Stream.subscribe(function (customer) { return _this.processCustomer(customer); });
    };
    Consumer.prototype.processCustomer = function (customer) {
        this.processed.push(customer);
    };
    Consumer.prototype.stopProcessing = function () {
        this.subscription.unsubscribe();
    };
    return Consumer;
}());
export { Consumer };
Consumer.decorators = [
    { type: Component, args: [{
                selector: 'consumer',
                templateUrl: './consumer.html'
            },] },
];
Consumer.ctorParameters = function () { return [
    { type: PubSubService, },
]; };
