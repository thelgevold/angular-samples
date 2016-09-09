import { Component, Input } from '@angular/core';
import { PubSubService } from './pub-sub-service';
import { Customer } from './customer';
export var Producer = (function () {
    function Producer(pubSubService) {
        this.pubSubService = pubSubService;
        this.firstName = '';
        this.lastName = '';
    }
    Producer.prototype.createCustomer = function () {
        var customer = new Customer();
        customer.firstName = this.firstName;
        customer.lastName = this.lastName;
        this.pubSubService.Stream.emit(customer);
    };
    Producer.decorators = [
        { type: Component, args: [{
                    selector: 'producer',
                    templateUrl: './producer.html'
                },] },
    ];
    Producer.ctorParameters = [
        { type: PubSubService, },
    ];
    Producer.propDecorators = {
        'firstName': [{ type: Input },],
        'lastName': [{ type: Input },],
    };
    return Producer;
}());
