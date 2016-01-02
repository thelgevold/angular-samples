import {Component,Input} from 'angular2/core';
import {PubSubService} from './pub-sub-service';
import {Customer} from './customer';

@Component({
    selector: 'producer',
    templateUrl: './components/pub-sub/producer.html'
})

export class Producer {

    @Input() firstName = '';
    @Input() lastName = '';

    constructor(private pubSubService:PubSubService){
    }

    createCustomer(){
        let customer = new Customer();
        customer.firstName = this.firstName;
        customer.lastName = this.lastName;

        this.pubSubService.Stream.emit(customer);
    }
}