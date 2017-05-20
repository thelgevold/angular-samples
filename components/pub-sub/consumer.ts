import {Component,OnInit} from '@angular/core';
import {PubSubService} from './pub-sub-service';
import {Customer} from './customer';

@Component({
    selector: 'consumer',
    template: `
    <div *ngIf="processed.length > 0">
    <h4>Processed Customers</h4>

    <table class="table">
        <thead>
            <tr>
                <td>First Name</td><td>Last Name</td>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let customer of processed">
                <td>{{customer.firstName}}</td>
                <td>{{customer.lastName}}</td>
            </tr>
        </tbody>
    </table>

    <button (click)="stopProcessing()">Stop Processing</button>
    </div>`
})

export class Consumer implements OnInit{

    processed = [];
    subscription = null;

    constructor(private pubSubService:PubSubService){
    }

    ngOnInit(){
        this.subscription = this.pubSubService.Stream.subscribe(customer => this.processCustomer(customer));
    }

    processCustomer(customer){
        this.processed.push(customer);
    }

    stopProcessing(){
        this.subscription.unsubscribe();
    }
}