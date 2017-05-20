import {Component,Input} from '@angular/core';
import {PubSubService} from './pub-sub-service';
import {Customer} from './customer';

@Component({
    selector: 'producer',
    template: `
    <div>First Name</div>
    <input [(ngModel)]="firstName" />

    <div>Last Name</div>
    <input [(ngModel)]="lastName" />

    <div style="margin-top: 10px;">
        <button (click)="createCustomer()">Create Customer</button>
    </div>`
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