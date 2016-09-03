import { Component, Input } from '@angular/core';
import { PubSubService } from './pub-sub-service';
import { Customer } from './customer';
export class Producer {
    constructor(pubSubService) {
        this.pubSubService = pubSubService;
        this.firstName = '';
        this.lastName = '';
    }
    createCustomer() {
        let customer = new Customer();
        customer.firstName = this.firstName;
        customer.lastName = this.lastName;
        this.pubSubService.Stream.emit(customer);
    }
}
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
